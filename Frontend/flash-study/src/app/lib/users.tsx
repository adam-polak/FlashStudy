'use client'

import { User } from "@/lib/definitions";
import { ReadonlyURLSearchParams, useRouter, useSearchParams } from "next/navigation";

async function useAuthentication(searchParams: ReadonlyURLSearchParams) {
    const loginKey = searchParams.get('i') ?? "";
    const router = useRouter();
    const isValid = !isNaN(Number(loginKey));
    if(isValid) {
        const user = await getUserFromKey(loginKey);
        if(user == null || isNaN(user.Key)) router.push('/');
    } else router.push('/');
}

async function getUserFromKey(loginKey: string) : Promise<User | null> {
    const apiUrl = 'https://flashstudy-api.azurewebsites.net/loginkey/' + loginKey;
    const response = await fetch(apiUrl);
    const result = await response.text();
    let obj: User | null;
    try {
        obj = JSON.parse(result);
    } catch(error) {
        obj = null;
    }
    return obj;
}

export async function getUser() : Promise<User | null> {
    const loginKey = useSearchParams().get('i') ?? '';
    const user = await getUserFromKey(loginKey);
    return user;
}

export function Authenticate() {
    useAuthentication(useSearchParams());
    return <></>;
}