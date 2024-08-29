import { ReadonlyURLSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export async function useAuthentication(searchParams: ReadonlyURLSearchParams) {
    const loginKey = searchParams.get('i') ?? "";
    const router = useRouter();
    useEffect(() => {
        if(loginKey === '' || isNaN(Number(loginKey))) router.push('/');
        else {
            const response = validateLoginKey(loginKey);
            if(isNaN(Number(response))) {
            }
        }
    })
}

async function validateLoginKey(loginKey: string) : Promise<string> {
    const apiUrl = 'https://flashstudy-api.azurewebsites.net/loginkey/' + loginKey;
    const response = fetch(apiUrl);
    return '';
}