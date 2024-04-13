import Link from "next/link"
import { Button } from "./ui/button"
import { auth, UserButton } from "@clerk/nextjs"
import {Cabin, Raleway} from "next/font/google"
import { cn } from "@/lib/utils";
const font = Raleway({subsets:["latin"]});

export const Navbar = async () => {

    const {userId} = await auth();

    return(
        <div className="fixed h-16 w-full border-b border-black flex items-center p-2 px-16 ">
            <h1 className={cn("text-xl", font.className)}>
                <b>Wealth Wise</b>
            </h1>

            {!userId ? (
                <div className="ml-auto flex gap-2">
                <Button className="transition ease-in-out delay-10 hover:translate-y-1 hover:scale-110 hover:bg-black duration-30 ...">
                    <Link href="/sign-in">
                        Sign In
                    </Link>
                </Button>
                <Button className="transition ease-in-out delay-10 hover:translate-y-1 hover:scale-110 hover:bg-black duration-30 ...">
                    <Link href="/sign-up">
                        Sign Up
                    </Link>
                </Button>
            </div>

            ): (
                <div className="ml-auto">
                    <UserButton afterSignOutUrl="/"/>
                </div>
            )}
        </div>
    )
}