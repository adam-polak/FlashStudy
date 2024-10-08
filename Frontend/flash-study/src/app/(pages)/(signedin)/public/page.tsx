'use client'

import { Authenticate } from "@/app/lib/users";
import { UserIconButton } from "@/app/lib/ui/buttons";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
    <div className="flex flex-col items-end pr-10">
      <Suspense>
        <UserIconButton />
      </Suspense>
    </div>
    <main className="flex flex-col items-center p-5">
      <Suspense>
        <Authenticate />
      </Suspense>
      <div className="flex text-red-300">Public Page</div>
    </main>
    </>
  );
}