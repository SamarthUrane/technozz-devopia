import Link from "next/link"
import { Button } from "./ui/button"
import { auth, UserButton } from "@clerk/nextjs"

export const Navbar = async () => {

    const {userId} = await auth();

    return(
        <div className="fixed h-16 w-full border-b border-black flex items-center p-2 px-16">
            <h1>
                Fintech
            </h1>
            {!userId ? (
                <div className="ml-auto flex gap-2">
                    <Button>
                        <Link href="/sign-in">
                            Sign In
                        </Link>
                    </Button>
                    <Button>
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