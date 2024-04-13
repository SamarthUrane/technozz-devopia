"use server";

import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';

type Props = {
    amount : string; 
    type: string;
    buy: boolean;
}

export const addSavings = async ({
    amount,
    type,
    buy
}: Props) => {
  
    const {userId} =  auth();
    const user = await currentUser();

    if(!userId || !user) return null;
 

    const prevSavings = await db.user.findUnique({
        where:{
            userId
        },
        select: {
            totalSav:true 
        }
    });     

    let finalAmount = 0;

    if(prevSavings){
        finalAmount = parseInt(prevSavings.totalSav)+parseInt(amount);
    }
    
    const newUser = await db.user.update({
        where:{
            userId
        },
        data: {
            totalSav:finalAmount.toString() 
        }
    });

    const newHistory = await db.history.create({
        data: {
            userId,
            amount,
            buy,
            type,
        }
    })

    revalidatePath("/");
    revalidatePath("/dash-board");

    return {newUser};
}
