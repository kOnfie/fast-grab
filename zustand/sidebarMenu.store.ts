import { create } from "zustand";

type Store = {
  sidebarIsOpen: boolean;
  toggleSidebar: () => void;
};

export const useSidebarMenu = create<Store>()((set) => ({
  sidebarIsOpen: false,
  toggleSidebar: () => set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
}));
