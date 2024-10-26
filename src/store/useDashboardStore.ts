// src/store/useDashboardStore.ts
import create from 'zustand';

interface DashboardState {
  learningGoals: number;
  setLearningGoals: (goals: number) => void;
}

const useDashboardStore = create<DashboardState>((set) => ({
  learningGoals: 0,
  setLearningGoals: (goals) => set({ learningGoals: goals }),
}));

export default useDashboardStore;
