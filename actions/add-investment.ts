"use server";

import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import { addSavings } from './set-savings';

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

    console.log("add investment called");

    const {userId} = await auth();
    const user = await currentUser();

    if(!userId || !user) return null;
 

    const newInvestment = await db.investment.create({
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
    
    

    const prevInv = await db.user.findUnique({
        where: {
            userId
        },
        select: {
            totalInv: true
        }
    });

    let totalInvAfterUpdate = 0;
    if(prevInv){
        totalInvAfterUpdate = parseInt(prevInv.totalInv) + parseInt(amount);
    }

    const updatedUserWithInv = await db.user.update({
        where: {
            userId
        },
        data: {
            totalInv: totalInvAfterUpdate.toString(),
        }
    })  
    const newamount=0 - parseInt(amount)
    const newvalue=newamount.toString() 
    addSavings({amount:newvalue, type: type, buy: true})
    revalidatePath("/");
    revalidatePath("/dash-board");

    return {newInvestment};
}