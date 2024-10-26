// src/store/useDashboardStore.ts
import { create } from 'zustand'; // Correct way to import from zustand

// Define the state structure with TypeScript
interface DashboardState {
  goals: string[];         // List of user goals
  setGoals: (goals: string[]) => void;  // Function to update goals
  username: string;        // User's name
  setUsername: (name: string) => void;  // Function to update username
}

// Create the Zustand store with initial values and state update functions
const useDashboardStore = create<DashboardState>((set) => ({
  goals: [],
  setGoals: (goals) => set({ goals }),

  username: '',
  setUsername: (name) => set({ username: name }),
}));

export default useDashboardStore;
