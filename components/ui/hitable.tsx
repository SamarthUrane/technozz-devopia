import { cn } from '@/lib/utils';
import { History } from '@prisma/client';
import React from 'react'; 

// Define the type for the dummyEntries data
interface Entry {
    Type: string;
    Name: string;
    Amount: number;
    Date: string;
    Member: string;
    buy: boolean
}

// Define props interface for the Table component
interface TableProps {
    historyData: History[] | null;
}

// Table component
const Hitable: React.FC<TableProps> = ({ historyData }) => {
    console.log(historyData);
    return (
        <div> 
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-2 mx-64">
                <h1 className='text-xl mb-3 font-bold ml-5'>History</h1>
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
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyData && historyData.map((item, i) => (
                            <tr key={item.id} className={i % 2 === 0 ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"}>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.type}</td>
                                <td className="px-6 py-4">{item.familyMemberName}</td>
                                <td className="px-6 py-4">{item.createdAt.toISOString()}</td>
                                <td className="px-6 py-4 ">
                                    <div className={cn(" hover:underline font-bold", item.buy?"text-red-900":"text-green-900")}> {item.amount}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Hitable;