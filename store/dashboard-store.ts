"use client";

import { create } from "zustand";

type DashboardState = {
  selectedDay: number;
  waterLogged: number;
  setSelectedDay: (day: number) => void;
  addWater: () => void;
};

export const useDashboardStore = create<DashboardState>((set) => ({
  selectedDay: 3,
  waterLogged: 2.1,
  setSelectedDay: (day) => set({ selectedDay: day }),
  addWater: () => set((state) => ({ waterLogged: Math.min(4, Number((state.waterLogged + 0.25).toFixed(2))) }))
}));
