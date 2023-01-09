import { motion } from "framer-motion";
import Image from "next/image";
import chrome from "../public/icons/chrome.svg";
import github from "../public/icons/github.svg";

export default function Buttons() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8">
      <motion.a
        href="https://chrome.google.com/webstore/detail/scangpt/goaaajgmfpnfebljepkcdmlmjfpeamko"
        data-splitbee-event="Install Extension"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.25,
          duration: 0.3,
        }}
        style={{ transition: "background-color 0.3s ease, color 0.3s ease" }}
        className="flex gap-2 items-center justify-center bg-zinc-800 text-white text-lg font-semibold rounded-2xl px-6 py-1.5 shadow-sm hover:bg-zinc-700 hover:text-white/40 group"
      >
        <Image
          className="group-hover:opacity-40 duration-300"
          src={chrome}
          alt={"chrome logo"}
          height={20}
        />
        Install Extension
      </motion.a>
      <motion.a
        href="https://github.com/zaidmukaddam/scan-gpt"
        rel="noreferrer"
        target="_blank"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.25,
          duration: 0.3,
        }}
        data-splitbee-event="Star on Github"
        style={{ transition: "color 0.3s ease" }}
        className="flex gap-2 items-center justify-center rounded-2xl text-white text-lg font-semibold px-6 py-1.5 hover:text-white/40 group"
      >
        <Image
          src={github}
          className="group-hover:opacity-40 duration-300"
          alt={"github logo"}
          height={26}
        />
        Star on Github
      </motion.a>
    </div>
  );
}