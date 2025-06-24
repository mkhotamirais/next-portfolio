import { create } from "zustand";

interface IPostStore {
  search: string;
  setSearch: (search: string) => void;
}

export const usePostStore = create<IPostStore>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));
