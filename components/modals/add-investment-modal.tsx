"use client";

import { useSetInvestmentModal } from "@/store/use-investment-modal";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { useEffect, useState, useTransition } from "react";
import { FormInput } from "../form/form-input";
import { MailWarning } from "lucide-react";
import { Separator } from "../ui/separator";
import { FormSubmit } from "../form/form-submit";
import { toast } from "sonner";

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

        // startTransition(() => {

        // });

    };

    if (!isClient) return null;

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl flex gap-2 items-center justify-center">
                        <MailWarning className="h-6 w-6" /> Email Alerts
                    </DialogTitle>
                    <DialogDescription className="py-1 text-center">
                        Set Your Email and Preferred Location for Timely Notifications
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
                                label="Risk factor"
                                id="riskFactor"
                                type="text"
                            />
                            <FormInput
                                label="Family member name"
                                id="familyMemeberName"
                                type="text"
                            />
                            <Separator />
                            <FormSubmit
                                isProcessing={pending}
                                className="w-full"
                            >
                                Set
                            </FormSubmit>
                        </div>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
