import Link from "next/link";
import { useEffect } from "react";

export default function Extension() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.zaid.scangpt";
    }
  }, []);

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <p className="text-lg text-white font-light">We are redirecting you.</p>
      <p className="text-lg text-zinc-300 font-light">
        If you are not instantly redirected,{" "}
        <Link
          className=" underline text-purple-400 "
          href="https://play.google.com/store/apps/details?id=com.zaid.scangpt"
        >
          click here
        </Link>
      </p>
    </main>
  );
}
