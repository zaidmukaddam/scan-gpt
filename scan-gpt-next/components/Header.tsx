import Image from "next/image";
import Link from "next/link";
import logo from "../public/icons/scan-gpt.svg";

export default function Header({ theme }: { theme: "light" | "dark" }) {
  let filter, opacity, color;
  switch (theme) {
    case "dark":
      filter = "invert(0%)";
      opacity = "1";
      color = "white";
      break;
    case "light":
      filter = "invert(100%)";
      opacity = "0.8";
      color = "rgb(0,0,0,0.8)";
      break;
  }

  return (
    <header className="w-full flex justify-between items-center px-32 py-6">
      <Link href="/">
        <Image style={{ filter, opacity }} src={logo} alt={""} />
      </Link>
    </header>
  );
}
