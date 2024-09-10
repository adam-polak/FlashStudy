'use client'

import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-red-400 flex flex-wrap items-center justify-between mx-auto p-4">
        <button className="self-center text-2xl md:text-3xl font-bold whitespace-nowrap text-white">
          <Link
            href={'/'}
          >
            FlashStudy
          </Link>
        </button>
      </div>
      <div style={{marginTop: 1 + 'em'}}></div>
      {children}
    </>
  );
}
