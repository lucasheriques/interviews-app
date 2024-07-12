import "@/app/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { ReactNode } from "react";

import { Toaster } from "@/components/ui/toaster";
import { Archivo, Libre_Franklin } from "next/font/google";
import { Header } from "./_header/header";
import { Providers } from "./providers";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});
const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});

export const metadata: Metadata = {
  title: "Interviews App",
  icons: [
    { rel: "icon", type: "image/png", sizes: "48x48", url: "/favicon.ico" },
  ],
  keywords: "yolo",
  description:
    "Um lugar para compartilhar experiências ao aplicar para empresas.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          archivo.variable + " " + libre_franklin.variable,
        )}
      >
        <Providers>
          <NextTopLoader />
          <Header />
          <div className="container mx-auto w-full py-12">{children}</div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
