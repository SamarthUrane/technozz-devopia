"use server";

import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
<<<<<<< HEAD
import { revalidatePath } from 'next/cache'; 
=======
import { revalidatePath } from 'next/cache';
import { addMember } from './add-members';
>>>>>>> 1eb11d4a731da1304c2922aa9b455001a18e7f69

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
<<<<<<< HEAD
    
=======

    addMember({name: newUser.userName, totalInv: "0"});

>>>>>>> 1eb11d4a731da1304c2922aa9b455001a18e7f69
    revalidatePath("/");
    revalidatePath("/dash-board");
    return {newUser};
}