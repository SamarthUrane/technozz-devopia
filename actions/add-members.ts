"use server";

import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';

type Props = {
    name: string,
    totalInv: string;
}

export const addMember = async ({
    name,
    totalInv
}: Props) => {

    const {userId} = await auth();
    const user = await currentUser();

    if(!userId || !user) return null;

    const newMember = await db.family.create({
        data: {
            userId,
            name,
            totalInv
        }
    });

    revalidatePath("/");
    revalidatePath("/dash-board");
    return {newMember};
}