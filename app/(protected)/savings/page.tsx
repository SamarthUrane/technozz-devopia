import { getUserInfo } from "@/actions/get-user-info";
import Hitable from "@/components/ui/hitable";
import { getHistory } from "@/db/queries";


const SavingsPage = async () => {
    
    const getHistoryData = getHistory();
    const getUserInfoData = getUserInfo();

    const [
        historyData,
        userInfo
    ] = await Promise.all([
        getHistoryData,
        getUserInfoData
    ])
    
    return (  
        <div>
         <div className="mb-4 flex gap-x-5 justify-center mt-5">
           <h2 className="text-2xl font-semibold mb-2">Total Family Savings:</h2>
           <p className="text-2xl font-bold text-blue-500">{userInfo?.user?.totalSav}</p>
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