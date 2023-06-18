import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("received request on /api/paragraph-scan");
  // handle (not)post requests
  if (req.method !== "POST") {
    res.status(400).json({
      message: "Bad request: only POST method allowed on this endpoint",
    });
    return;
  }

  // handle (not)text requests
  if (!req.body.text) {
    res.status(400).json({ message: "Bad request: text is missing" });
    return;
  }

  // get text from body
  const text = sanitizeText(req.body.text);

  const response = await fetch(
    `https://9cdd41621cd4.ngrok.app/api/score`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    }
  );
  
  if (!response.ok) {
    console.error("error", response);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
  const probability = await response.json();

  console.log("response", { text, probability: probability.probability });
  res.status(200).json({ text, probability: probability.probability });
}

function sanitizeText(text: string) {
  // remove all the line breaks
  text = text.replace(/(\r\n|\n|\r)/gm, " ");
  // remove all the extra spaces
  text = text.replace(/\s+/g, " ");
  // return the cleaned text
  return text;
}
