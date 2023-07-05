import Link from "next/link";

export default function Footer({ page }: { page: "home" | "support" }) {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {page === "home" ? (
        <footer className="absolute bottom-8 flex flex-col items-center justify-center gap-1">
          <div className="flex flex-row gap-2">
            <Link href="/support"
              data-splitbee-event="Visit Support"
            >
              <p className="text-white/40 text-sm py-1 px-2 cursor-pointer hover:text-white duration-200">
                Support
              </p>
            </Link>
            <Link href="https://instagram.com/scangpt" data-splitbee-event="Visit Instagram" >
              <p className="text-white/40 text-sm py-1 px-2 cursor-pointer hover:text-white duration-200">
                Instagram
              </p>
            </Link>
          </div>

          <a
            // style={{ color }}
            data-splitbee-event="Visit Zaid Mukaddam"
            href="https://zaidmukaddam.com"
            rel="noreferrer"
            target="_blank"
            className=" text-white/40 text-sm py-1 px-2 cursor-pointer hover:text-white duration-200"
          >
            Zaid Mukaddam, {currentYear}
          </a>
        </footer>
      ) : (
        <footer className="pb-8 flex flex-col items-center justify-center gap-1">
          <div className="flex flex-row gap-2">
            <Link href="/"
              data-splitbee-event="Visit Home"
            >
              <p className="text-white/40 text-sm py-1 px-2 cursor-pointer hover:text-white duration-200">
                Home
              </p>
            </Link>
            <Link href="https://instagram.com/scangpt"
              data-splitbee-event="Visit Instagram"
            >
              <p className="text-white/40 text-sm py-1 px-2 cursor-pointer hover:text-white duration-200">
                Instagram
              </p>
            </Link>
          </div>

          <a
            // style={{ color }}
            data-splitbee-event="Visit Zaid Mukaddam"
            href="https://zaidmukaddam.com"
            rel="noreferrer"
            target="_blank"
            className=" text-white/40 text-sm py-1 px-2 cursor-pointer hover:text-white duration-200"
          >
            Zaid Mukaddam, {currentYear}
          </a>
        </footer>
      )}
    </>
  );
}
