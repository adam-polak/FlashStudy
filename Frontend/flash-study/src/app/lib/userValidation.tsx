import { ReadonlyURLSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export async function useAuthentication(searchParams: ReadonlyURLSearchParams) {
    const id = searchParams.get('i') ?? "";
    const router = useRouter();
    useEffect(() => {
        if(id === '' || isNaN(Number(id))) router.push('/');
    })
}