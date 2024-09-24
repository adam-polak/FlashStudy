import Link from "next/link";
import { getKey, useGetUser } from "../users";
import { UserIcon } from "lucide-react";

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
        <>
        <Link className="flex flex-row text-xl border-2 rounded-lg text-red-700 border-red-400 p-1 mr-[-1em]"
            href={`/user?i=${user.Key}`}
        >
            <UserIcon />
            {user.Username}
        </Link>
        </>
    );
}

export function CreateSetButton() {
    const key = getKey();
    return (
        <>
        <Link className="flex flex-row text-2xl fond-bold rounded-lg text-white bg-green-400 p-1 mr-[-1em]"
            href={`/user/set?i=${key}&s=0`}
        >
            <button>
                Create Set
            </button>
        </Link>
        </>
    );
}