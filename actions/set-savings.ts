"use server";

import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';

type Props = {
    amount : string; 
    type: string;
    buy: boolean;
    name?: string;
}

export const addSavings = async ({
    amount,
    type,
    buy,
    name
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
            familyMemberName: name ? name : newUser.userName
        }
    })

    revalidatePath("/");
    revalidatePath("/dash-board");

    return {newUser};
}
