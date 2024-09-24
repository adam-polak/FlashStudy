'use client'

import { UserIconButton } from "@/app/lib/ui/buttons";
import { Authenticate } from "@/app/lib/users";
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
      <Suspense><Authenticate /></Suspense>
      <div className="flex text-red-300">Collection Page</div>
    </main>
    </>
  );
}