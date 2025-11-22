import { create } from 'zustand';
import { HomeData } from '../../types/home/home.type';

interface HomeState {
  homeData: HomeData | null;
  setHomeData: (data: HomeData) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useHomeStore = create<HomeState>((set) => {
  return {
    homeData: null,
    isLoading: false,
    setHomeData: (data) => set({ homeData: data }),
    setIsLoading: (loading) => set({ isLoading: loading }),
  };
});
