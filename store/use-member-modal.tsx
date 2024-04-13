import { create } from "zustand"

type SetMemberModalStore = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useSetMemberModal = create<SetMemberModalStore>((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}));