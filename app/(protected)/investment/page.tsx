import Table from '@/components/ui/intable'; 
import { getUserInfo } from '@/actions/get-user-info';
import { AddButton } from './add-button';

const Page = async () => {

  const getUserInfoData = getUserInfo();

  const [
    userInfo
  ] = await Promise.all([
    getUserInfoData
  ]);

  const totalInvestment = 350000;
  const dummyEntries = [
    {
        Type: "Stocks",
        Name: "XYZ Company",
        Amount: 5000,
        Date: "2024-04-13",
        Member:"Abhi"
    },
    {
        Type: "Gold",
        Name: "Gold Bars",
        Amount: 10000,
        Date: "2024-04-14",
        Member:"Om"
    },
    {
        Type: "Land",
        Name: "Plot 123",
        Amount: 250000,
        Date: "2024-04-15",
        Member:"Samarth"
    },
    {
        Type: "House",
        Name: "Dream House",
        Amount: 500000,
        Date: "2024-04-16",
        Member:"Prathames"
    },
    {
        Type: "MF",
        Name: "Mutual Fund",
        Amount: 20000,
        Date: "2024-04-17",
        Member:"Samarth"
    },
    {
        Type: "FD",
        Name: "Fixed Deposit",
        Amount: 100000,
        Date: "2024-04-18",
        Member:"Abhi"
    },
    {
        Type: "Insurance",
        Name: "Life Insurance",
        Amount: 15000,
        Date: "2024-04-19",
        Member:"Samarth"
    }
];

  return (
    <div> 
      <div className="mb-4 flex gap-x-5 justify-center mt-5">
        <h2 className="text-2xl font-semibold mb-2">Total Family Investment:</h2>
        <p className="text-2xl font-bold text-blue-500">{userInfo?.user?.totalInv}</p>
      </div>
      <div className="mb-4 flex justify-center">
        <AddButton />
      </div>
      <Table dummyEntries={dummyEntries}/>
    </div>
  );
};

export default Page;