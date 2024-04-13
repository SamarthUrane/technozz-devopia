"use server";

import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';

type Props = {
    age: string;
    gender: string;
}

export const setUserInfo = async ({
    age,
    gender
}: Props) => {

    const {userId, user} = await auth();

    if(!userId || !user) return null;

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

    return {newUser};
}