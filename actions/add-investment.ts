"use server";

import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';

type Props = {
    amount : string;
    type : string;
    invName: string;
    riskFactor: string;
    returnFactor: string;
    familyMemberName: string;
}

export const addInvestment = async ({
    amount,
    type,
    invName,
    riskFactor,
    returnFactor,
    familyMemberName
}: Props) => {

    console.log("set user called");

    const {userId} = await auth();
    const user = await currentUser();

    if(!userId || !user) return null;

    console.log("user" + user);

    const newUser = await db.investment.create({
        data: {
            userId,
            amount,
            type,
            invName,
            riskFactor,
            returnFactor,
            familyMemberName
        }
    });

    revalidatePath("/");
    revalidatePath("/dash-board");

    return {newUser};
}