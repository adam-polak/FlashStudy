import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
      <main className="flex flex-col items-center p-10">
        <Card className="p-5 md:w-[50%] w-[70%] h-[20em] md:h-[25em] bg-rose-300 text-white font-semibold">
          <CardContent className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-2">
              <p>Username</p>
              <Input className="text-black font-normal" type="text" placeholder="Username"></Input>
            </div>
            <div className="flex flex-col space-y-2">
              <p>Password</p>
              <Input className="text-black font-normal " type="password" placeholder="Password"></Input>
            </div>
            <div className="flex flex-col items-center p-5">
              <button className="rounded-lg bg-rose-500 w-full md:w-1/2 h-10 md:h-12">Sign In</button>
            </div>
          </CardContent>
        </Card>
      </main>
    );
  }
  