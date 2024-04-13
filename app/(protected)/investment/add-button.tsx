"use client";

import { useSetInvestmentModal } from "@/store/use-investment-modal";

export const AddButton = () => {
    const {open} = useSetInvestmentModal();

    return(
        <div>
            <button 
                onClick={open}
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
            >
                Add New Investment
            </button>
        </div>
    )
}