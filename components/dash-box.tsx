"use client";

import { Button } from '@/components/ui/button';
import { useSetInvestmentModal } from '@/store/use-investment-modal';
import { useSetSavingsModal } from '@/store/use-savings-modal';
import { HandCoins, PiggyBank, Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  totalMoney: any;
}

const DashBox: React.FC<Props> = ({ title, totalMoney }) => {
  const {open : investmentOpen} = useSetInvestmentModal();
  const {open: savingsOpen} = useSetSavingsModal();

  let Icon;

  if(title === "Investment"){
    Icon = <HandCoins className='h-7 w-7'/>
  }
  else{
    Icon = <PiggyBank className='h-7 w-7'/>
  }

  return (
    <div className="flex flex-col w-full p-6 bg-white border border-gray-400 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 h-64">
      <div className='flex items-center justify-center gap-4 mb-4 relative'>
        {Icon}
        <h5 className="text-2xl font-semibold tracking-tight text-center text-gray-900 dark:text-white">{title}</h5>
        <div 
          onClick={title === "Investment" ? () => investmentOpen() : () => savingsOpen()}
          className='absolute right-0 cursor-pointer'
        >
          <Plus className=''/>
        </div>
      </div>
      <p className='text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque mollitia enim omnis molestiae minima eligendie.
      </p>
      <p className="mb-3 mt-3 text-xl font-normal text-center text-gray-500 dark:text-gray-400">Total in Rs. {totalMoney}</p>
        <Button 
          variant="outline"
          className='w-fit mx-auto'
        >
          <Link href={title === "Investment" ? "/investment" : "savings"}>
            View More
          </Link>
        </Button>
    </div>
  );
};

export default DashBox;
