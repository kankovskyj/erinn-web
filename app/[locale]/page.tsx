import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "../components/LocaleSwitcher";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <main className="flex mb-24 lg:mb-0 flex-col w-11/12 mx-auto items-center gap-12 min-h-screen place-content-center">
      <div className="my-24 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-100 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="relative w-[320px] h-[90px] lg:w-[460px] lg:h-[180px] dark:hidden block">
          <Image
            className="absolute  dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/line-black.svg"
            alt="Next.js Logo"
            fill
            priority
          />
        </div>

        <div className="relative w-[320px] h-[90px] lg:w-[460px] lg:h-[180px] hidden dark:block">
          <Image
            className="absolute  dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/line-white.svg"
            alt="Next.js Logo"
            fill
            priority
          />
        </div>
      </div>
      <div className="flex w-full gap-8 justify-between flex-col lg:flex-row flex-shrink-0 flex-grow-0">
        <div className="border-white border-[1px] shadow-sm shadow-white dark:shadow-black dark:border-black bg-[#ffffff77] dark:bg-[#0c0c0c] dark:opacity-50 hover:bg-[#ffffffcc] dark:hover:bg-[#020202e9] transition-all backdrop-blur-md p-7 rounded-lg font-light leading-7 text-sm w-full">
          <p className="opacity-90 dark:opacity-100 ">{t("title")}</p>
        </div>
        <div className="border-white border-[1px] shadow-sm shadow-white dark:shadow-black dark:border-black bg-[#ffffff77] dark:bg-[#0c0c0c] dark:opacity-50 hover:bg-[#ffffffcc] dark:hover:bg-[#020202e9] transition-all backdrop-blur-md p-7 rounded-lg font-light leading-7 text-sm w-full">
          <p className="opacity-90 dark:opacity-100 ">{t("subtitle")}</p>
        </div>
        <div className="border-white flex flex-col items-start border-[1px] shadow-sm shadow-white dark:shadow-black dark:border-black bg-[#ffffff77] dark:bg-[#0c0c0c] dark:opacity-50 hover:bg-[#ffffffcc] dark:hover:bg-[#020202e9] transition-all backdrop-blur-md p-7 rounded-lg font-light leading-7 text-sm w-full">
          <p className="opacity-90 dark:opacity-100 ">{t("contact")}</p>
          <Link
            href="mailto:info@erinncapital.cz"
            className="font-semibold bg-white dark:bg-[#0f0f0f] py-2 px-4 rounded-full mt-4 flex items-start"
          >
            info@erinncapital.cz
          </Link>
        </div>
      </div>
      <LocaleSwitcher />
    </main>
  );
}
