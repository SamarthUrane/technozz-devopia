"use server";

import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import { addSavings } from './set-savings';

type Props = {
    id : string; 
}

export const deleteInvestment = async ({
    id
}: Props) => {

    console.log("delete investment called");

    const {userId} = await auth();
    const user = await currentUser();

    if(!userId || !user) return null;
   

    const deletedInvest = await db.investment.delete({
        where: {
            id
        }
    });

    const prevData = await db.user.findUnique({
        where: {
            userId
        },
        select: {
            totalInv: true,
            totalSav:true
        }
    });

    const amountToUpdate=parseInt(deletedInvest.amount);
    const temp = await db.user.update({
        where:{
            userId
        },
        data: {
            totalSav:(parseInt(prevData.totalSav)+amountToUpdate).toString(),
            totalInv:(parseInt(prevData.totalInv)-amountToUpdate).toString()
        }
    });
    
    
    revalidatePath("/");
    revalidatePath("/dash-board");

    return {temp};
}