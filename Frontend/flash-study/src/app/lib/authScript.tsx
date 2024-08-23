'use client'

import { useSearchParams } from "next/navigation";
import { useAuthentication } from "./userValidation";

export function Authenticate() {
    useAuthentication(useSearchParams());
    return <></>;
}