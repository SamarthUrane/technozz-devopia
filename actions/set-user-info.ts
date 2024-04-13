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

<<<<<<< HEA

    const {userId} = await auth();
    const user = await currentUser();

=======
    const {userId} = await auth();
    const user= await currentUser();
>>>>>>> c4dc9e79bac5d59973d44c3f72a786ccef0252f5
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
<<<<<<< HEAD

=======
>>>>>>> c4dc9e79bac5d59973d44c3f72a786ccef0252f5
    return {newUser};
}