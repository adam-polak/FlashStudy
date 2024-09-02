'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ApiResponses } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function SignUp() {
    const router = useRouter();
    const [formData, setFormData] = useState({username: '', password: ''});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}));
    }

    async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        const response = await tryCreateUser(formData.username, formData.password);
        if(response === ApiResponses.TryAgain) {

        } else if(response === ApiResponses.UsernameExists) {

        } else router.push(`/collection?i=${response}`);
    }

    async function tryCreateUser(username: string, password: string) {
        const apiUrl = `https://flashstudy-api.azurewebsites.net/user/createuser/${username}/${password}`;
        const response = await fetch(apiUrl, {method: "POST"});
        const result = await response.text();
        return result;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-row justify-center items-center p-10">
            <Card className="md:p-10 p-5 md:w-[60%] lg:w-[50%] w-[100%] h-[22em] bg-rose-300 text-white font-semibold">
                <CardContent className="flex flex-col space-y-3">
                    <div className="flex flex-col space-y-2">
                        <p>Username</p>
                        <Input value={formData.username} name="username" onChange={handleChange} className="text-black font-normal focus-visible:ring-rose-400" placeholder="username"></Input>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p>Password</p>
                        <Input  value={formData.password} name="password" onChange={handleChange} className="text-black font-normal focus-visible:ring-rose-400" type="password" placeholder="password"></Input>
                    </div>
                    <div className="flex flex-col items-center p-5 space-y-5 md:space-y-6">
                        <button type="submit" className="rounded-lg bg-rose-500 w-full md:w-1/2 h-12">Create User</button>
                        <p className="font-normal text-lg md:text-xl">Already a user? <a className="text-rose-500 font-semibold underline" href={'/login'}>Login</a></p>
                    </div>
                </CardContent>
            </Card>
        </form>
    );
}

export function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState({username: '', password: ''});

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setFormData(prevData => ({...prevData, [name]: value}));
    }

    async function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        const response = await tryLogin(formData.username, formData.password);
        if(response === ApiResponses.TryAgain) {

        } else if(response === ApiResponses.IncorrectLogin) {

        } else router.push(`/collection?i=${response}`);
    }

    async function tryLogin(username: string, password: string) {
        const apiUrl = `https://flashstudy-api.azurewebsites.net/login/${username}/${password}`;
        const response = await fetch(apiUrl);
        const result = await response.text();
        return result; 
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-row justify-center items-center p-10">
            <Card className="md:p-10 p-5 md:w-[60%] lg:w-[50%] w-[100%] h-[20em] bg-rose-300 text-white font-semibold">
                <CardContent className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <p>Username</p>
                        <Input value={formData.username} name="username" onChange={handleChange} className="text-black font-normal focus-visible:ring-rose-400" type="text" placeholder="username"></Input>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p>Password</p>
                        <Input value={formData.password} name="password" onChange={handleChange} className="text-black font-normal focus-visible:ring-rose-400" type="password" placeholder="password"></Input>
                    </div>
                    <div className="flex flex-col items-center p-5">
                        <button type="submit" className="rounded-lg bg-rose-500 w-full md:w-1/2 h-12">Sign In</button>
                    </div>
                </CardContent>
            </Card>
        </form>
    );
}