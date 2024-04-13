import { auth, UserButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import {Cabin} from "next/font/google"

import Image from "next/image";
const font = Cabin({subsets:["latin"]})
export default function Home() {
  return (
     
<div className="flex h-full w-full bg-blue-300 items-center justify-center gap-20 p-20">
<div className="flex-col w-50 h-25 p-20 shadow-xl bg-amber-200 border-black-200 rounded-xl  dark:border-gray-700 gap-5">
<h5 className="mb-3 text-base text-center font-semibold text-white md:text-xl dark:text-white">
Take Control of Your Finances<br/>💰💸<br/>
          With the best financial management platform<br/>
</h5>
<p className="text-sm pb-5 font-normal text-center text-white">Explore our range of services designed to meet your needs !!!</p>

<div className="flex gap-5">
<div>
<ul className="my-4 space-y-3">
<li>
<a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
<Image src="/finance.svg" alt="icon" height={30} width={30}/>
<span className="flex-1 ms-3 whitespace-nowrap">Financial Dashboard</span>
</a>
</li>
<li>
<a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
<Image src="/risk.svg" alt="icon" height={30} width={30}/>
<span className="flex-1 ms-3 whitespace-nowrap">Risk Assessment</span>
</a>
</li>
<li>
<a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
<Image src="/family.svg" alt="icon" height={30} width={30}/>
<span className="flex-1 ms-3 whitespace-nowrap">Family Fanancial Management</span>
</a>
</li>
</ul>
</div>

<div>
<ul className="my-4 space-y-3">
<li>
<a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
<Image src="/calculator.svg" alt="icon" height={30} width={30}/>
<span className="flex-1 ms-3 whitespace-nowrap">Net Worth Calculator</span>
</a>
</li>
<li>
<a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
<Image src="/recommendation.svg" alt="icon" height={30} width={30}/>
<span className="flex-1 ms-3 whitespace-nowrap">Personalized Recommendations</span>
</a>
</li>
<li>
<a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
<Image src="/revenue.svg" alt="icon" height={30} width={30}/>
<span className="flex-1 ms-3 whitespace-nowrap">Risk Adjustment Guide</span>
</a>
</li>
</ul>
</div>
</div>


</div>


<div>
<Image src="/bitcoin.gif" width={300} height={300} alt="Picture of the author"/>
</div>

</div>
   
  );
}
