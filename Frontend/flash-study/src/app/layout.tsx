import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
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
          <button className="self-center text-2xl md:text-3xl font-bold whitespace-nowrap text-white">
            <Link
              href={'/'}
            >
              FlashStudy
            </Link>
          </button>
          <div className="flex items-center">
            <button className="flex items-center font-medium p-3 md:p-4 text-xl md:text-2xl text-white w-30 md:w-34 h-10 hover:bg-red-700 bg-red-600 rounded-md">
              <Link
                href={'/signup'}
              >
                Sign Up
              </Link>
            </button>
          </div>
        </div>
        <div style={{marginTop: 1 + 'em'}}></div>
        {children}
      </body>
    </html>
  );
}
