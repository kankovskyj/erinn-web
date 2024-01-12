import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "../components/LocaleSwitcher";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <main className="flex relative mb-24 lg:mb-0 flex-col w-11/12 mx-auto items-center mt-[8rem] lg:mt-24 place-content-center">
      <LocaleSwitcher />

      <div className="mt-4 mb-4 relative flex place-items-center">
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
      <div className="flex items-center w-2/3 mt-12 lg:w-1/2 justify-between flex-col text-center flex-shrink-0 flex-grow-0">
        <p className="opacity-90 dark:opacity-70 italic ">{t("title")}</p>

        <p className="opacity-90 dark:opacity-70 italic ">{t("subtitle")}</p>
      </div>
      <div className="w-2/3 mt-40 mb-8 h-[2px] bg-[#bbbbbb7e]" />
      <Link
        className="font-light opacity-90 dark:opacity-70"
        href="mailto:info@erinncapital.cz"
      >
        info@erinncapital.cz
      </Link>
    </main>
  );
}
