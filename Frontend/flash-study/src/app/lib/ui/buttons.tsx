import Link from "next/link";
import { useGetUser } from "../users";

export function SignUpButton() {
    return (
        <><div className="flex items-center">
            <button className="flex items-center font-medium p-3 md:p-4 text-xl md:text-2xl text-white w-30 md:w-34 h-10 hover:bg-red-700 bg-red-600 rounded-md">
            <Link
                href={'/signup'}
            >
                Sign Up
            </Link>
            </button>
        </div></>
    );
}

export async function UserIconButton() {
    const user = await useGetUser();
    if(user == null) return <></>;
    else return (
        <Link
            href={`/user?i=${user.Key}`}
        >{user.Username}</Link>
    );
}