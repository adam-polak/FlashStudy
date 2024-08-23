'use client'

import { useAuthentication } from "@/app/lib/authenticate";
import { useSearchParams } from "next/navigation";

export default function Page() {
  useAuthentication(useSearchParams());
  return (
    <main className="flex flex-col items-center p-10">
      <div className="flex text-red-300">Collection Page</div>
    </main>
  );
}