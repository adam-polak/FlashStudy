import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlashStudy",
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}