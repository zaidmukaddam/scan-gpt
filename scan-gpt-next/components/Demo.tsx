import Image from "next/image";
import extension from "../public/images/extension.png";
import page from "../public/images/demo.png";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Footer from "./Footer";

export default function Demo() {
  const currentYear = new Date().getFullYear();

  const [selectedFeature, setSelectedFeature] = useState<"page" | "paragraph">(
    "page"
  );

  return (
    <>
      <div className="w-screen pb-72 overflow-hidden relative flex flex-col md:flex-row items-center md:items-start justify-center px-6 md:gap-10">
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
          className="shadow-lg rounded-[11px] w-full md:w-96 mt-28"
        >
          <Image
            src={extension}
            alt={""}
            className="w-full h-full rounded-[11px] opacity-100 z-10"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
          className="w-full md:w-96 flex flex-col mt-28"
        >
          <h1 className="text-2xl overflow-hidden text-[#D6D6D6]">Features</h1>
          <div className="mt-4 text-lg font-medium flex gap-8">
            <button
              style={{
                color: selectedFeature === "page" ? "white" : "#535353",
              }}
              className="duration-200 hover:text-white/40"
              onClick={() => setSelectedFeature("page")}
            >
              Page Scan
            </button>
            <button
              style={{
                color: selectedFeature === "paragraph" ? "white" : "#535353",
              }}
              className="duration-200"
              onClick={() => setSelectedFeature("paragraph")}
            >
              Paragraphs
            </button>
          </div>
          <div className="mt-4 text-lg text-[#D6D6D6] flex flex-col gap-4 w-full md:w-[19rem] cursor-crosshair">
            {selectedFeature === "page" ? (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col gap-4"
                >
                  <p className="opacity-60 blur-[1px] hover:opacity-100 hover:blur-none duration-300">
                    Amount of paragraphs with a high chance of being generated.
                  </p>
                  <p className="opacity-60 blur-[1px] hover:opacity-100 hover:blur-none duration-300">
                    Total amount of paragraphs on the page.
                  </p>
                  <p className="opacity-60 blur-[1px] hover:opacity-100 hover:blur-none duration-300">
                    Maximum probability observed in the paragraphs.
                  </p>
                  <p className="opacity-60 blur-[1px] hover:opacity-100 hover:blur-none duration-300">
                    Probability of the page being generated by AI.
                  </p>
                </motion.div>
              </AnimatePresence>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex flex-col gap-4"
              >
                <p className="opacity-60 blur-[1px] hover:opacity-100 hover:blur-none duration-300">
                  In-depth analysis of paragraphs.
                </p>
                <p className="opacity-60 blur-[1px] hover:opacity-100 hover:blur-none duration-300">
                  The paragraph is presented with its likelihood of being
                  generated by AI.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 0.8, translateY: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          className="absolute hidden md:flex justify-end w-[50vw] left-0 -z-10"
        >
          <Image src={page} alt={""} className="w-full max-w-3xl blur-sm " />
        </motion.div>

        <Footer page="home" />
      </div>
    </>
  );
}
