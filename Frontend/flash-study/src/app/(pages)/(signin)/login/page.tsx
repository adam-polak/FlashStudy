import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
      <main className="flex flex-row justify-center items-center p-10">
        <Card className="md:p-10 p-5 md:w-[60%] lg:w-[50%] w-[70%] h-[18em] md:h-[20em] bg-rose-300 text-white font-semibold">
          <CardContent className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-2">
              <p>Username</p>
              <Input className="text-black font-normal focus-visible:ring-rose-400" type="text" placeholder="Username"></Input>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Password</p>
              <Input className="text-black font-normal focus-visible:ring-rose-400" type="password" placeholder="Password"></Input>
            </div>
            <div className="flex flex-col items-center p-5">
              <button className="rounded-lg bg-rose-500 w-full md:w-1/2 h-12">Sign In</button>
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }
  