import { create } from "zustand"

type SetInvestmentModalStore = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useSetInvestmentModal = create<SetInvestmentModalStore>((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}));