import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { cache } from "react";

export const getInvestments = cache(async () => {
    const {userId} = await auth();

    if(!userId) return null;

    const data = await db.investment.findMany({
        where: {
            userId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return data;
});

export const getHistory = cache(async () => {
    
    const {userId} = await auth();

    if(!userId) return null;

    const data = await db.history.findMany({
        where:{
            userId
        },
        orderBy:{
            createdAt: 'desc'
        }
    });

    return data;
});

export const getMembers = cache(async () => {
    
    const {userId} = await auth();

    if(!userId) return null;

    const data = await db.family.findMany({
        where:{
            userId
        },
        orderBy:{
            totalInv:'desc'
        }
    });

    return data;
})