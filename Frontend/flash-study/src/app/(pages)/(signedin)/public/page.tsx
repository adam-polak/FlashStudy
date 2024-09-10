'use client'

import { Authenticate } from "@/app/lib/users";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="flex flex-col items-center p-10">
      <Suspense>
        <Authenticate />
      </Suspense>
      <div className="flex text-red-300">Public Page</div>
    </main>
  );
}