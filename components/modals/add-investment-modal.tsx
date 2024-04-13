"use client";

import { useSetInvestmentModal } from "@/store/use-investment-modal";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { useEffect, useState, useTransition } from "react";
import { FormInput } from "../form/form-input";
import { HandCoins } from "lucide-react";
import { Separator } from "../ui/separator";
import { FormSubmit } from "../form/form-submit";
import { toast } from "sonner";
import { addInvestment } from "@/actions/add-investment";

export const AddInvestmentModal = () => {
    const { isOpen, close } = useSetInvestmentModal();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => setIsClient(true), []);

    const [pending, startTransition] = useTransition();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (pending) return;

        const formData = new FormData(event.target);
        const amount = formData.get("amount") as string;
        const type = formData.get("type") as string;
        const invName = formData.get("invName") as string;
        const riskFactor = formData.get("riskFactor") as string;
        const returnFactor = formData.get("returnFactor") as string;
        const familyMemberName = formData.get("familyMemberName") as string;

        startTransition(() => {
            addInvestment({amount, type, invName, riskFactor, returnFactor, familyMemberName})
            .then(() => toast.success("Investment Added"))
            .catch(() => toast.error("Something went wrong"));
        });

    };

    if (!isClient) return null;

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl flex gap-2 items-center justify-center">
                        <HandCoins className="h-6 w-6" /> Add Investment
                    </DialogTitle>
                    <DialogDescription className="py-1 text-center">
                        Add about your new Investment
                    </DialogDescription>
                    <Separator />
                    <form onSubmit={handleSubmit} className="mx-0">
                        <div className="space-y-4">
                            <FormInput
                                label="Amount"
                                id="amount"
                                type="number"
                            />
                            <FormInput
                                label="Type"
                                id="type"
                                type="text"
                            />
                            <FormInput
                                label="Invest name"
                                id="invName"
                                type="text"
                            />
                            <FormInput
                                label="Return factor"
                                id="riskFactor"
                                type="text"
                            />
                            <FormInput
                                label="Risk factor"
                                id="returnFactor"
                                type="text"
                            />
                            <FormInput
                                label="Family member name"
                                id="familyMemberName"
                                type="text"
                            />
                            <Separator />
                            <FormSubmit
                                isProcessing={pending}
                                className="w-full"
                            >
                                Add
                            </FormSubmit>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
