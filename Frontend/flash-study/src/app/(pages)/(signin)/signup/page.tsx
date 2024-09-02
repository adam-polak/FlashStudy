import { SignUp } from "@/app/lib/forms";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function Page() {
  return (
    <SignUp></SignUp>
    // <main className="flex flex-row justify-center items-center p-10">
    //   <Card className="md:p-10 p-5 md:w-[60%] lg:w-[50%] w-[100%] h-[22em] bg-rose-300 text-white font-semibold">
    //     <CardContent className="flex flex-col space-y-3">
    //       <div className="flex flex-col space-y-2">
    //         <p>Username</p>
    //         <Input className="text-black font-normal focus-visible:ring-rose-400" type="text" placeholder="username"></Input>
    //       </div>
    //       <div className="flex flex-col space-y-2">
    //         <p>Password</p>
    //         <Input className="text-black font-normal focus-visible:ring-rose-400" type="password" placeholder="password"></Input>
    //       </div>
    //       <div className="flex flex-col items-center p-5 space-y-5 md:space-y-6">
    //         <button className="rounded-lg bg-rose-500 w-full md:w-1/2 h-12">Create User</button>
    //         <p className="font-normal text-lg md:text-xl">Already a user? <a className="text-rose-500 font-semibold underline" href={'/login'}>Login</a></p>
    //       </div>
    //     </CardContent>
    //   </Card>
    // </main>
  );
}