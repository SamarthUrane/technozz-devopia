import React from 'react';
import DashBox from '../../../components/dash-box';
import Members from '../../../components/member-box';
import { getUserInfo } from '@/actions/get-user-info';
import { RegisterForm } from './register-form';
import { getInvestments } from '@/db/queries';
import { BarChart } from '@/components/charts/bar-chart';

const Page: React.FC = async () => {
    
    const getUserData = getUserInfo();
    const getInvestmentsData = getInvestments();

    const [
        userData,
        investmentsData
    ] = await Promise.all([
        getUserData,
        getInvestmentsData
    ]);

    const investmentAmount = [0, 0, 0, 0]; //stock, land, gold, oth

    investmentsData?.map((i) => {
        if(i.type === "Stock" || i.type === "stock"){
            investmentAmount[0] += parseInt(i.amount);
        }
        else if(i.type === "Land" || i.type === "land"){
            investmentAmount[1] += parseInt(i.amount);
        }
        else if(i.type === "Gold" || i.type === "gold"){
            investmentAmount[2] += parseInt(i.amount);
        }
        else{
            investmentAmount[3] += parseInt(i.amount);
        }
    })

    return (
        <div className='h-full'>
            {userData?.user?.userId ? (
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-4 md:p-8">
                    <div className='grid grid-cols-2 gap-8'>
                        <DashBox title="Investment" totalMoney={userData.user.totalInv === "0" ? 0 : parseInt(userData.user.totalInv)} />
                        <DashBox title="Savings" totalMoney={userData.user.totalSav === "0" ? 0 : parseInt(userData.user.totalSav)} />
                        <BarChart investmentAmount={investmentAmount}/>
                    </div>
                    <Members />
                </div>
            ) : (
                <div className='flex justify-center items-center h-[80vh] pt-16'>
                    <div className='w-[40%] h-full flex justify-center pl-16 text-2xl flex-col gap-4'>
                        Welcome to Finance wisely
                        <p>
                            Fill up this form to get started
                        </p>
                    </div>
                    <div className='w-[60%]'>
                        <RegisterForm />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page;
