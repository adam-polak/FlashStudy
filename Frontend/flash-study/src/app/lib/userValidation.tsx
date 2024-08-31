import { ReadonlyURLSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export async function useAuthentication(searchParams: ReadonlyURLSearchParams) {
    const loginKey = searchParams.get('i') ?? "";
    const router = useRouter();
    const isValid = !isNaN(Number(loginKey));
    const response = isValid ? await validateLoginKey(loginKey) : 'invalid';
    useEffect(() => {
        if(isNaN(Number(response)) || Number(response) != Number(loginKey)) router.push('/');
    })
}

async function validateLoginKey(loginKey: string) : Promise<string> {
    const apiUrl = 'https://flashstudy-api.azurewebsites.net/loginkey/' + loginKey;
    const response = await fetch(apiUrl);
    const result = await response.text();
    return result;
}