import { auth, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  
  const {userId} = auth();

  if(userId){
    redirect("/dash-board");
  }

  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold">
          Take Control of Your Finances.
        </h1>
      </div>
    </div>
  );
}
