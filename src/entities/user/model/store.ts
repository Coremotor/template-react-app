import { create } from "zustand";

interface UserState {
  user: User | null;
  setUser: (name: string) => void;
}

interface User {
  name: string;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (name) => {
    set((state) => ({ user: { name } }));
  },
}));
