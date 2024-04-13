import Hitable from "@/components/ui/hitable";
import { getHistory } from "@/db/queries";


const SavingsPage = async () => {
    
    const getHistoryData = getHistory();

    const [
        historyData
    ] = await Promise.all([
        getHistoryData
    ])

    const dummyEntries = [
        {
            Type: "Stocks",
            Name: "XYZ Company",
            Amount: 5000,
            Date: "2024-04-13",
            Member:"Abhi",
            buy:true
        },
        {
            Type: "Gold",
            Name: "Gold Bars",
            Amount: 10000,
            Date: "2024-04-14",
            Member:"Om",
            buy:false
        },
        {
            Type: "Land",
            Name: "Plot 123",
            Amount: 250000,
            Date: "2024-04-15",
            Member:"Samarth",
            buy:true
        },
        {
            Type: "House",
            Name: "Dream House",
            Amount: 500000,
            Date: "2024-04-16",
            Member:"Prathamesh",
            buy:true
        },
        {
            Type: "MF",
            Name: "Mutual Fund",
            Amount: 20000,
            Date: "2024-04-17",
            Member:"Samarth",
            buy:true
        },
        {
            Type: "FD",
            Name: "Fixed Deposit",
            Amount: 100000,
            Date: "2024-04-18",
            Member:"Abhi",
            buy:false
        },
        {
            Type: "Insurance",
            Name: "Life Insurance",
            Amount: 15000,
            Date: "2024-04-19",
            Member:"Samarth",
            buy:true
        }
    ];
    
    const totalSavings=0;
    return (  
        <div>
         <div className="mb-4 flex gap-x-5 justify-center mt-5">
           <h2 className="text-2xl font-semibold mb-2">Total Family Savings:</h2>
           <p className="text-2xl font-bold text-blue-500">{totalSavings}</p>
         </div>
         <div className="mb-4 flex justify-center">
           <button  
             className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
             Add Funds
           </button>
         </div>
         <Hitable historyData={historyData}/>
       </div>
    );
}
 
export default SavingsPage;