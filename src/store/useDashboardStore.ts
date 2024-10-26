// src/store/useDashboardStore.ts
import { create } from 'zustand'; // Correct way to import from zustand

interface DashboardState {
  goals: string[];
  setGoals: (goals: string[]) => void;
}

// Explicitly typing 'set' to avoid 'any' type errors
const useDashboardStore = create<DashboardState>((set: (state: Partial<DashboardState>) => void) => ({
  goals: [],
  setGoals: (goals: string[]) => set({ goals }),
}));

export default useDashboardStore;
