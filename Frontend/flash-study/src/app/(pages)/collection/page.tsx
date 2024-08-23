'use client'

import { authenticateUser } from "@/app/lib/authenticate";
import { useSearchParams } from "next/navigation";

export default async function Page() {
  const searchParams = useSearchParams();
  const userId = searchParams.get('i') ?? "";
  authenticateUser(userId);

  return (
    <main className="flex flex-col items-center p-10">
      <div className="flex text-red-300">Collection Page</div>
    </main>
  );
}