import Table from '@/components/ui/intable'; 
import { getUserInfo } from '@/actions/get-user-info';
import { getInvestments } from '@/db/queries';
import { AddButton } from './add-button';

const Page = async () => {
  // Dummy total investment value
  const getUserData = getUserInfo();
  const getInvestmentsData = getInvestments();

  const [
      userData,
      investmentsData
  ] = await Promise.all([
      getUserData,
      getInvestmentsData
  ]);


  const getUserInfoData = getUserInfo();

  const [
    userInfo
  ] = await Promise.all([
    getUserInfoData
  ]); 
 
  return (
    <div> 
      <div className="mb-4 flex gap-x-5 justify-center mt-5">
        <h2 className="text-2xl font-semibold mb-2">Total Family Investment:</h2>
        <p className="text-2xl font-bold text-blue-500">{userInfo?.user?.totalInv}</p>
      </div>
      <div className="mb-4 flex justify-center">
        <AddButton />
      </div>
      <Table investmentsData={investmentsData}/>
    </div>
  );
};

export default Page