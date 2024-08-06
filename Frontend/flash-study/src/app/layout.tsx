import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlashStudy",
  description: "Home page for FlashStudy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-red-400 flex flex-wrap items-center justify-between mx-auto p-4">
          <button className="self-center text-3xl font-bold whitespace-nowrap text-white">FlashStudy</button>
          <div className="flex items-center">
            <button className="flex items-center w-20 h-12 hover:bg-red-700 bg-red-600 rounded-md">
              <a href="http://youtube.com" className="font-medium p-4 text-xl text-white">Login</a>
            </button>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
