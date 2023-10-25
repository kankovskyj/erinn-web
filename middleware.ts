import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["cs", "en"],

  defaultLocale: "cs",
  localePrefix: "always",
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
