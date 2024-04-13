import { create } from "zustand"

type SetSavingsModalStore = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useSetSavingsModal = create<SetSavingsModalStore>((set) => ({
    isOpen: false,
    open: () => set({isOpen: true}),
    close: () => set({isOpen: false}),
}));