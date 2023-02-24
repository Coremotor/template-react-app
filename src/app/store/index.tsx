import { create } from "zustand";

interface LoadingState {
  isLoading: boolean;
  setIsLoading: (status: boolean) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  setIsLoading: (status) => {
    set(() => ({ isLoading: status }));
  },
}));
