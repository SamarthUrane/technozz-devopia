import React from 'react';
import { getMembers } from '@/db/queries';
import Link from 'next/link';
import MemberButton from './add-member-button';
import { User } from 'lucide-react';

const Members= async () => {
  
  const getMembersdata = getMembers();

  const [
    membersdata
  ] = await Promise.all([
    getMembersdata
  ]); 

  return (
    <div className="w-full min-w-16 p-4 bg-white border border-gray-400 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Members</h5>
        {/* <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </a> */}
        <MemberButton />
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {membersdata?.map((member, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <User className='h-7 w-7'/>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {member.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                   Total Investment: ${member.totalInv}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  <Link href="">View</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Members;