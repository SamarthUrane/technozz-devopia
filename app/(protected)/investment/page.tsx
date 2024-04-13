import React from 'react';
import Table from '@/components/ui/intable'; 
import { getUserInfo } from '@/actions/get-user-info';
import { getInvestments } from '@/db/queries';

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

  console.log(investmentsData);

  const totalInvestment = 350000;

  return (
    <div> 
      <div className="mb-4 flex gap-x-5 justify-center mt-5">
        <h2 className="text-2xl font-semibold mb-2">Total Family Investment:</h2>
        <p className="text-2xl font-bold text-blue-500">{totalInvestment}</p>
      </div>
      <div className="mb-4 flex justify-center">
        <button  
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
          Add New Investment
        </button>
      </div>
      <Table investmentsData={investmentsData}/>
    </div>
  );
};

export default Page;