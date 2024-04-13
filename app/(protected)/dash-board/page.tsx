import React from 'react';
import DashBox from '../../../components/dash-box';
import Members from '../../../components/member-box';
import { getUserInfo } from '@/actions/get-user-info';
import { RegisterForm } from './register-form';
import { getInvestments } from '@/db/queries';


interface Member {
    name: string;
    email: string;
    amount: string;
    image: string;
}

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

    console.log(investmentsData);

    const members: Member[] = [{
        "name": "Samarth",
        "email": "samarthurane3201@gmail.com",
        "amount": "5000",
        "image": "https://imgs.search.brave.com/jLTwrBSRPcoyhBJs1uPbMl500isS1N2O0JlI3BLUQoY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc"
    },
    {
        "name": "Om",
        "email": "samarthurane3201@gmail.com",
        "amount": "700",
        "image": "https://imgs.search.brave.com/jLTwrBSRPcoyhBJs1uPbMl500isS1N2O0JlI3BLUQoY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc"
    },
    {
        "name": "Abhi",
        "email": "samarthurane3201@gmail.com",
        "amount": "15500",
        "image": "https://imgs.search.brave.com/d0GBVnoCtuAMwVYfoNDnVt8BR41jyHxdQ2VG0tpFewg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDQ3MjM3OTUtM2Zi/NjQ2OWY1YjM5P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRWOGZIQnli/MlpwYkdVbE1qQndh/V04wZFhKbGZHVnVm/REI4ZkRCOGZId3c"
    }];

    const handleSubmit = () => {

    }

    return (
        <div className='h-full'>
            {userData?.user?.userId ? (
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 p-4 md:p-8">
                    <DashBox title="Investment" totalMoney={userData.user.totalInv === "0" ? 0 : parseInt(userData.user.totalInv)} />
                    <DashBox title="Savings" totalMoney={userData.user.totalSav === "0" ? 0 : parseInt(userData.user.totalSav)} />
                    <Members membersdata={members} />
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
