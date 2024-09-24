'use client'

import { Authenticate } from "@/app/lib/users";
import { CreateSetButton, UserIconButton } from "@/app/lib/ui/buttons";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
    <div className="flex flex-row justify-between space-x-11 items-end pl-10 pr-10">
      <CreateSetButton />
      <Suspense>
        <UserIconButton />
      </Suspense>
    </div>
    <main className="flex flex-col items-center">
      <Suspense>
        <Authenticate />
      </Suspense>
      <div className="flex text-red-300">User Page</div>
    </main>
    </>
  );
}