"use server";

import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';

type Props = {
    age: string;
    gender: string;
}

export const setUserInfo = async ({
    age,
    gender
}: Props) => {


    const {userId} = await auth();
    const user = await currentUser();

    if(!userId || !user) return null;

    console.log("user" + user);

    const newUser = await db.user.create({
        data: {
            userId,
            userName: user.firstName + " " + user.lastName,
            imageUrl: user.imageUrl,
            age: age,
            gender: gender,
            totalInv: "0",
            totalSav: "0"
        }
    });

    revalidatePath("/");
    revalidatePath("/dash-board");
    return {newUser};
}