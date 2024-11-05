import Header from "./components/Header";
import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Kind of Cruise",
  description: "Technical challenge for My Kind of Cruise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Header />
        <main className="px-4 sm:mx-auto sm:max-w-[584px]   md:max-w-[612px] lg:max-w-[996px] xl:max-w-[1196px] mt-6">
          {children}
        </main>
      </body>
    </html>
  );
}
