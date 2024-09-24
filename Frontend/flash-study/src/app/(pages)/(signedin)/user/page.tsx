'use client'

import { Authenticate } from "@/app/lib/users";
import { UserIconButton } from "@/app/lib/ui/buttons";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
    <main className="flex flex-col items-center p-5">
      <Suspense>
        <Authenticate />
      </Suspense>
      <div className="flex text-red-300">User Page</div>
    </main>
    </>
  );
}