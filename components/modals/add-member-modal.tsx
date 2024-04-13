"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { useEffect, useState, useTransition } from "react";
import { FormInput } from "../form/form-input";
import { UserRoundPlus } from "lucide-react";
import { Separator } from "../ui/separator";
import { FormSubmit } from "../form/form-submit";
import { toast } from "sonner";
import { useSetMemberModal } from "@/store/use-member-modal";
import { addMember } from "@/actions/add-members";

export const AddMemberModal = () => {
    const { isOpen, close } = useSetMemberModal();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => setIsClient(true), []);

    const [pending, startTransition] = useTransition();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (pending) return;

        const formData = new FormData(event.target);

        startTransition(() => { 
            const name = formData.get("name") as string; 

            addMember({name: name, totalInv: "0"}).then(()=>{
                toast.success("Member added");
                close();
            }).catch(()=>{
                toast.error("something went wrong")
            })
        });

    };

    if (!isClient) return null;

    return (
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl flex gap-2 items-center justify-center">
                        <UserRoundPlus className="h-6 w-6" /> Add Members
                    </DialogTitle>
                    <DialogDescription className="py-1 text-center">
                        Add members to your group
                    </DialogDescription>
                    <Separator />
                    <form onSubmit={handleSubmit} className="mx-0">
                        <div className="space-y-4">
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
