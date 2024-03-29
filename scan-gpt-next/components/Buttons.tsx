import { motion } from "framer-motion";
import Image from "next/image";
import chrome from "../public/icons/chrome.svg";
import github from "../public/icons/github.svg";
import playbadge from "../public/icons/google-play.png";

export default function Buttons() {
  return (
    <>
      <div className="flex flex-col mt-12 sm:flex-row items-center justify-center gap-2 sm:gap-8 overflow-hidden">
        <motion.a
          href="/extension"
          data-splitbee-event="Get Extension"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            type: "spring",
          }}
          style={{ transition: "background-color 0.3s ease, color 0.3s ease" }}
          className="flex gap-2 items-center justify-center bg-black text-white text-lg font-medium rounded-xl px-6 py-1.5 shadow-sm hover:bg-zinc-900 hover:text-white/40 group"
        >
          <Image
            className="group-hover:opacity-40 duration-300"
            src={chrome}
            alt={"chrome logo"}
            height={20}
          />
          Get Extension
        </motion.a>
        <motion.a
          href="https://github.com/zaidmukaddam/scan-gpt"
          data-splitbee-event="Github Source"
          rel="noreferrer"
          target="_blank"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            type: "spring",
          }}
          style={{ transition: "color 0.3s ease" }}
          className="flex gap-2 items-center justify-center rounded-2xl text-white text-lg font-medium px-6 py-1.5 hover:text-white/40 group"
        >
          <Image
            src={github}
            className="group-hover:opacity-40 duration-300"
            alt={"github logo"}
            height={26}
          />
          Star on Github
        </motion.a>
        {/* add google playy button */}
        <motion.a
          href="/app"
          data-splitbee-event="Google Play"
          rel="noreferrer"
          target="_blank"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            type: "spring",
          }}
          style={{ transition: "color 0.3s ease" }}
          className="flex gap-2 items-center justify-center rounded-2xl text-white text-lg font-medium px-6 py-1.5 hover:text-white/40 group"
        >
          <Image
            src={playbadge}
            className="group-hover:opacity-40 duration-300"
            alt={"google play logo"}
            height={70}
          />
        </motion.a>
        <motion.a
          href="/web"
          data-splitbee-event="Web App"
          rel="noreferrer"
          target="_blank"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            type: "spring",
          }}
          style={{ transition: "color 0.3s ease" }}
          className="flex gap-2 items-center justify-center bg-black text-white text-lg font-medium rounded-xl px-6 py-1.5 shadow-sm hover:bg-zinc-900 hover:text-white/40 group"
        >
          <Image
            width="24" height="24" 
            src="https://img.icons8.com/material-sharp/192/ffffff/globe--v2.png" 
            alt="globe--v2" 
            loading="lazy" />
          Web App
        </motion.a>
      </div>
    </>
  );
}
