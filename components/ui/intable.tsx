'use client'
import React from 'react';
import { deleteInvestment } from '@/actions/delete-investment'; 
import { Investment } from '@prisma/client';

interface Entry {
    id:string;
    userId:string;
    amount:string;
    type: string;
    invName: string;
    riskFactor:string;
    returnFactor:string;
    createdAt:Date;
    familyMemberName:string;
}

interface TableProps {
    investmentsData: Investment[] | null;
}

// Table component
const Table: React.FC<TableProps> = ({ investmentsData }) => {

    const handleDelete = (e:any)=>{
        e.preventDefault();
        deleteInvestment({id:e.target.id})
    }
    return (
        <div> 
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-2">
                <h1 className='text-xl mb-3 font-bold ml-5'>Your Family&apos;s Total Investment</h1>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Member
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Delete</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {investmentsData && investmentsData.map((entry, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"}>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{entry.type}</td>
                                <td className="px-6 py-4">{entry.invName}</td>
                                <td className="px-6 py-4">{entry.amount}</td>
                                <td className="px-6 py-4">{entry.createdAt.toDateString()}</td>
                                <td className="px-6 py-4">{entry.familyMemberName}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" id={entry.id} onClick={handleDelete}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;