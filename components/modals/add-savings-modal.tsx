"use client";

import { useSetSavingsModal } from "@/store/use-savings-modal";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { useEffect, useState, useTransition } from "react";
import { FormInput } from "../form/form-input";
import { PiggyBank } from "lucide-react";
import { Separator } from "../ui/separator";
import { FormSubmit } from "../form/form-submit";
import { toast } from "sonner";

export const AddSavingsModal = () => {
    const { isOpen, close } = useSetSavingsModal();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => setIsClient(true), []);

    const [pending, startTransition] = useTransition();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (pending) return;

        const formData = new FormData(event.target);

        startTransition(() => {
            const email = formData.get("email") as string;
            const location = formData.get("location") as string;
        });

    };

    if (!isClient) return null;

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl flex gap-2 items-center justify-center">
                        <PiggyBank className="h-6 w-6" /> Add Savings
                    </DialogTitle>
                    <DialogDescription className="py-1 text-center">
                        Add to your savings
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
                                label="Name"
                                id="name"
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
