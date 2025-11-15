import cn from "classnames";
import type { Metadata } from "next";

import "@/styles/globals.scss";
import "@/styles/reset.scss";
import designVariables from "@/styles/design-variables.module.scss";

import { Arvo } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import StoreProvider from "@/store/provider";

const arvoSerif = Arvo({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "CV Analyzer",
  description: "Easy and efficient job matching platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body
        className={cn(GeistSans.variable, arvoSerif.variable, designVariables.variables)}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
