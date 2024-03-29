import SEO from "../components/SEO";
import Header from "../components/Header";
import Help from "../components/Help";
import Accordion from "../components/Accordion";
import Footer from "../components/Footer";

import { useState } from "react";

export default function Support() {
  const [firstCollapseOpen, setFirstCollapseOpen] = useState(false);
  const [secondCollapseOpen, setSecondCollapseOpen] = useState(false);
  const [thirdCollapseOpen, setThirdCollapseOpen] = useState(false);
  const [fourthCollapseOpen, setFourthCollapseOpen] = useState(false);

  return (
    <>
      <div className="w-full min-h-screen overflow-x-hidden">
        <SEO
          title="ScanGPT | Support"
          description="Get help with our extension."
          image="https://scangpt.wtf/og/support-image.png"
          url="https://scangpt.wtf/support"
        />
        <main className="w-full flex flex-col items-center">
          <Header />
          <section className="flex flex-col gap-10 py-20 items-center">
            <Help />
            <div className="flex flex-col items-center w-[100vw] px-6 md:w-[80vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[50vw] md:px-0">
              <Accordion
                delay={0.2}
                setOpen={setFirstCollapseOpen}
                open={firstCollapseOpen}
                title={"How do I install the extension?"}
                content={
                  "To install the extension, click the 'Install Extension' button on the Home Page, and it will send you to the Chrome Web Store. In the Store, click 'Add to Chrome'."
                }
              />
              <Accordion
                delay={0.25}
                setOpen={setSecondCollapseOpen}
                open={secondCollapseOpen}
                title="How do I get it for FireFox?"
                content="For now, the extension is only available for Chrome. We are working on a FireFox version and will release it as soon as possible. Stay tuned in our Instagram account for updates."
              />
              <Accordion
                delay={0.3}
                setOpen={setThirdCollapseOpen}
                open={thirdCollapseOpen}
                title={"Why is it giving me an error?"}
                content={
                  "If you are getting an error, it is possible that something went wrong in our servers. Please try again after an amount of time. We are working on a fix for most errors."
                }
              />
              <Accordion
                delay={0.35}
                setOpen={setFourthCollapseOpen}
                open={fourthCollapseOpen}
                title={"How do I contact support?"}
                content={
                  "You can contact our support by emailing zaidmukaddam@proton.me. We are available to assist you Monday through Friday, 9am to 5pm IST, or randomly at other times."
                }
              />
            </div>
          </section>
          <Footer page="support" />
        </main>
      </div>
    </>
  );
}
