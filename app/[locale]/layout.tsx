import type { Metadata } from "next";
import { useLocale } from "next-intl";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";
const locales = ["cs", "en"];

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ERINN CAPITAL",
  description: "Konáme dobré skutky a investujeme s dlouhodobou vizí.",
};

import type { ReactNode } from "react";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  return (
    <html lang={locale}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
