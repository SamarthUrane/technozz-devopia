import React from 'react'; 

// Define the type for the dummyEntries data
interface Entry {
    Type: string;
    Name: string;
    Amount: number;
    Date: string;
    Member: string;
}

// Define props interface for the Table component
interface TableProps {
    dummyEntries: Entry[];
}

// Table component
const Table: React.FC<TableProps> = ({ dummyEntries }) => {
    return (
        <div> 
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-2">
                <h1 className='text-xl mb-3 font-bold ml-5'>Your Family's Total Investment</h1>
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
                        {dummyEntries.map((entry, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600"}>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{entry.Type}</td>
                                <td className="px-6 py-4">{entry.Name}</td>
                                <td className="px-6 py-4">{entry.Amount}</td>
                                <td className="px-6 py-4">{entry.Date}</td>
                                <td className="px-6 py-4">{entry.Member}</td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
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