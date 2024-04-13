"use server";

import { db } from '@/lib/db';
import { auth, currentUser } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';

type Props = {
    id : string; 
}

export const deleteInvestment = async ({
    id
}: Props) => {

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
    let prevTotalSav = "0";
    let prevTotalInv = "0";
    if(prevData){
        prevTotalSav = prevData.totalSav;
        prevTotalInv = prevData.totalInv;
    }

    const temp = await db.user.update({
        where:{
            userId
        },
        data: {
            totalSav:(parseInt(prevTotalSav)+amountToUpdate).toString(),
            totalInv:(parseInt(prevTotalInv)-amountToUpdate).toString()
        }
    });
    
    //update the totalInvest in Family for member
    const memberInvUpdate = await db.family.findUnique({
        where: {
            name:deletedInvest.familyMemberName
        },
        select: {
            totalInv: true
        }
    });
    let memberInvafterupdate = 0;
    if(memberInvUpdate){
        memberInvafterupdate = parseInt(memberInvUpdate.totalInv) - amountToUpdate;
    }

    const newHistory = await db.history.create({
        data: {
            userId,
            amount: deletedInvest.amount,
            buy: false,
            type: deletedInvest.type,
            familyMemberName: deletedInvest.familyMemberName,
        }
    })

    const newUser = await db.family.update({
        where:{
            name:deletedInvest.familyMemberName
        },
        data: {
            totalInv:memberInvafterupdate.toString() 
        }
    });
    
    revalidatePath("/");
    revalidatePath("/dash-board");

    return {temp};
}