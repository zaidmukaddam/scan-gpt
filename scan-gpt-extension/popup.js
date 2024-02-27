// Function to handle menu button clicks
function handleMenuButtonClick(event) {
  const targetId = event.target.id;
  if (targetId === "scan-page-button") {
    document.getElementById("results").style.display = "block";
    document.getElementById("paragraph-scan").style.display = "flex";
    document.getElementById("page-scan").style.display = "flex";
    document.querySelector(".scan-text").style.display = "none";
    // Call the existing function to scan the page
    scanPage();
  } else if (targetId === "input-text-button") {
    document.getElementById("results").style.display = "none";
    document.getElementById("paragraph-scan").style.display = "none";
    document.getElementById("page-scan").style.display = "none";
    document.querySelector(".scan-text").style.display = "flex";
  }
}

// Add click event listeners for the menu buttons
document.getElementById("scan-page-button").addEventListener("click", handleMenuButtonClick);
document.getElementById("input-text-button").addEventListener("click", handleMenuButtonClick);

const submitButton = document.getElementById("submit-input");
const submitText = document.getElementById("submit-text");
const submitLoader = document.getElementsByClassName("submit-loader")[0];
const clearButton = document.getElementById("clear-input");

clearButton.addEventListener("click", function () {
  document.getElementById("input-textarea").value = "";
  document.getElementById("user-input-results").innerHTML = "";
});

submitButton.addEventListener("click", function () {
  // Replace the "Submit" text with the loader animation
  submitText.style.display = "none";
  submitLoader.style.display = "inline-block";

  // Call function to perform the scan here
  handleUserInput();
});

function removeLinksAndMarkdown(text) {
  return text.replace(/(\[(.*?)\]\(https?:\/\/[^\s]+\))|([*_~`]|\\[\[\]()<>#+\-!])/g, "");
}


function isGPTGenerated(probability) {
  const threshold = 50;
  return probability >= threshold;
}


function handleUserInput() {
  const inputTextarea = document.getElementById("input-textarea");
  const removeLinksCheckbox = document.getElementById("remove-links");
  let paragraphs = inputTextarea.value.split(/\n\s*\n/);

  // Apply removeLinks function if the checkbox is checked
  if (removeLinksCheckbox.checked) {
    paragraphs = paragraphs.map(removeLinksAndMarkdown);
  }

  let paragraphPromises = [];

  // Make API requests for each paragraph
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphPromises.push(
      fetch(`https://scangpt.wtf/api/ext-detect`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: paragraphs[i] }),
      })
    );
  }

  console.log(paragraphPromises);

  // Wait for all API requests to complete
  Promise.all(paragraphPromises)
    .then((responses) => Promise.all(responses.map((r) => r.json())))
    .then((data) => {
      // Display paragraphs with their probabilities
      let results = document.getElementById("user-input-results");
      results.innerHTML = ""; // Clear previous results


      results.innerHTML += `<h3 class="result-label">Results</h3>`;
      // a hr element to separate the results from the input box
      results.innerHTML += `<hr/>`;

      for (let i = 0; i < data.length; i++) {
        const probabilityPercentage = Math.ceil(data[i].probability * 100);
        const aiGenerated = isGPTGenerated(probabilityPercentage);

        results.innerHTML += `<p class="para-n">Paragraph ${i + 1}: </p>`;
        results.innerHTML += `<p class="scan-paragraph">${paragraphs[i]}</p>`;
        results.innerHTML += `<p class="scan-bubble-focus">${probabilityPercentage}% GPT probability ${aiGenerated ? " -  GPT Text Detected" : ""
          }</p>`;
        results.innerHTML += `<div class="scan-separator"></div>`;
      }
      submitText.style.display = "inline";
      submitLoader.style.display = "none";
    })
    .catch((error) => {
      console.error(error);
      submitText.style.display = "inline";
      submitLoader.style.display = "none";
      // Handle the error (e.g., display an error message)
      const errorContainer = document.getElementById("user-input-results");
      errorContainer.style.display = "flex";
      errorContainer.style.flexDirection = "column";
      errorContainer.style.justifyContent = "center";
      errorContainer.style.alignItems = "center";

      errorContainer.innerHTML += `<p class="error-message">Something went wrong. Try again later.</p>`; // If the error persists, contact our support team.
      errorContainer.innerHTML += `<a class="error-link" href="https://scangpt.wtf/support" target="_blank" rel="noreferrer">Support Page</a>`;
      errorContainer.innerHTML += `<p class="error-or">OR</p>`;
      errorContainer.innerHTML += `<p class="error-message">Try using the <a class="error-link" href="https://scangpt.wtf/app" target="_blank" rel="noreferrer">app</a>.</p>`;
    });
}


function scanPage() {
  // Send message to content script to get paragraphs and collections
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { message: "get_paragraphs_and_collections" },
      function (response) {
        let paragraphs = response.paragraphs;
        let collections = response.collections;

        // Make API requests for each paragraph and collection
        let paragraphPromises = [];
        let collectionPromises = [];

        for (let i = 0; i < paragraphs.length; i++) {
          paragraphPromises.push(
            fetch(`https://scangpt.wtf/api/ext-detect`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ text: paragraphs[i] }),
            })
          );
        }
        for (let i = 0; i < collections.length; i++) {
          collectionPromises.push(
            fetch(`https://scangpt.wtf/api/ext-detect`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ text: collections[i] }),
            })
          );
        }

        // Wait for all API requests to complete
        Promise.all(paragraphPromises)
          .then((responses) => Promise.all(responses.map((r) => r.json())))
          .then((data) => {
            // Get the average probability by using the collections
            Promise.all(collectionPromises).then((responses) => {
              Promise.all(responses.map((r) => r.json())).then(
                (collectionData) => {
                  // calculate the average probability
                  let averageProbability = 0;
                  for (let i = 0; i < collectionData.length; i++) {
                    averageProbability += collectionData[i].probability;
                  }
                  averageProbability /= collectionData.length;

                  // Find paragraphs with > 0.5 probability
                  let highProbabilityParagraphs = data.filter(
                    (p) => p.probability > 0.5
                  );

                  // Find paragraphs with highest probability
                  let highestProbabilityParagraph = 0;
                  for (let i = 0; i < data.length; i++) {
                    if (data[i].probability > highestProbabilityParagraph) {
                      highestProbabilityParagraph = data[i].probability;
                    }
                  }

                  // Display all the page-scan probability
                  let pageResults = document.getElementById("page-scan");
                  pageResults.innerHTML += `<p class="scan-bubble">${highProbabilityParagraphs.length} GPT paragraphs</p>`;
                  pageResults.innerHTML += `<p class="scan-bubble">${data.length} total paragraphs</p>`;
                  pageResults.innerHTML += `<p class="scan-bubble">${Math.ceil(
                    highestProbabilityParagraph * 100
                  )}% max probability</p>`;
                  pageResults.innerHTML += `<div class="scan-bubble">${Math.ceil(
                    averageProbability * 100
                  )}% GPT probability</div>`;

                  // Hide loading screen
                  document.getElementById("page-load").style.display = "none";
                }
              );
            });

            // Display paragraphs with their probabilities
            let results = document.getElementById("paragraph-scan");

            for (let i = 0; i < data.length; i++) {
              results.innerHTML += `<p class="scan-paragraph">${data[i].text}</p>`;
              results.innerHTML += `<p class="scan-bubble-focus">${Math.ceil(
                data[i].probability * 100
              )}% GPT probability</p>`;
              results.innerHTML += `<div class="scan-separator"></div>`;
            }

            // Hide loading screen
            document.getElementById("paragraph-load").style.display = "none";
          })
          .catch((error) => {
            // Hide loading screen
            document.getElementById("page-load").style.display = "none";
            document.getElementById("paragraph-load").style.display = "none";

            // Hide scan elements
            document.getElementById("page-scan").style.display = "none";
            document.getElementById("paragraph-scan").style.display = "none";

            // Display error message
            const errorContainer = document.getElementById("results");
            errorContainer.style.display = "flex";
            errorContainer.style.flexDirection = "column";
            errorContainer.style.justifyContent = "center";
            errorContainer.style.alignItems = "center";

            errorContainer.innerHTML += `<p class="error-message">Something went wrong. Try again later.</p>`; // If the error persists, contact our support team.
            errorContainer.innerHTML += `<a class="error-link" href="https://scangpt.wtf/support" target="_blank" rel="noreferrer">Support Page</a>`;
            errorContainer.innerHTML += `<p class="error-or">OR</p>`;
            errorContainer.innerHTML += `<p class="error-message">Try using the <a class="error-link" href="https://scangpt.wtf/app" target="_blank" rel="noreferrer">app</a>.</p>`;
          });
      }
    );
  })
};
