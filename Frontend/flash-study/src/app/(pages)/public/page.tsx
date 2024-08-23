'use client'

import { authenticateUser } from "@/app/lib/authenticate";
import { useSearchParams } from "next/navigation";

export default function Page() {
  authenticateUser(useSearchParams());
  return (
    <main className="flex flex-col items-center p-10">
      <div className="flex text-red-300">Public Page</div>
    </main>
  );
}