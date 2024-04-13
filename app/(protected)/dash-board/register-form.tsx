"use client";

import { FormInput } from '@/components/form/form-input';
import { Separator } from '@/components/ui/separator';
import { FormSubmit } from '@/components/form/form-submit';
import { useTransition } from 'react';
import { setUserInfo } from '@/actions/set-user-info';
import { toast } from 'sonner';

export const RegisterForm = () => {

    const [pending, startTransaction] = useTransition();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(pending) return;
        

        const formData = new FormData(e.target);
        const age = formData.get("age") as string;
        const gender = formData.get("gender") as string;
  

        startTransaction(() => {
            setUserInfo({age, gender})
            .then(() => {
                toast.success("Registered successfully!");
                
            })
            .catch(() => toast.error("Something went wront"));
        })
    }

    return(
        <div className=''>
            <h1>
                Registration form
            </h1>
            <form onSubmit={handleSubmit} className="mx-0">
                        <div className="space-y-4">
                            <FormInput
                                label="Age"
                                id="age"
                                type="number"
                            />
                            <FormInput
                                label="Gender"
                                id="gender"
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
        </div>
    )
}