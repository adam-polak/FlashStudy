import { useRouter } from "next/navigation";
import { useEffect } from "react";

export async function authenticateUser(id: string) {
    const router = useRouter();
    if(id === '' || isNaN(Number(id))) useEffect(() => {router.push('/')});
}