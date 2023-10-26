"use client";

import { Languages } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { useTransition } from "react";

type Locale = "en" | "cs";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale: Locale = useLocale() as Locale; // Cast the returned value to Locale
  const router = useRouter();
  const pathname = usePathname();

  const localeDisplayNames: Record<Locale, string> = {
    en: "Čeština",
    cs: "English",
  };

  function toggleLocale() {
    const nextLocale: Locale = locale === "en" ? "cs" : "en";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <button
      className="transition-opacity absolute -top-24 lg:-top-12 right-4 text-sm opacity-50 hover:opacity-80 inline-flex items-center"
      onClick={toggleLocale}
      disabled={isPending}
    >
      <Languages className="w-4 h-4 mr-2" />
      {localeDisplayNames[locale]}
    </button>
  );
}
