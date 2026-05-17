import { create } from "zustand";

type OverlayMessage = unknown;

type RoutineStep = {
  id: string;
  title: string;
  description?: string;
};

type Routine = {
  id: string;
  title: string;
  steps: RoutineStep[];
};

type Session = {
  stepIndex: number;
  xp: number;
  streak: number;
};

type AppState = {
  overlays: OverlayMessage | null;
  routine: Routine;
  session: Session;
  actions: {
    setOverlays: (value: OverlayMessage | null) => void;
    nextStep: () => void;
    resetSession: () => void;
    addXp: (value: number) => void;
  };
};

export const useAppStore = create<AppState>((set) => ({
  overlays: null,

  routine: {
    id: "default-routine",
    title: "Morning Routine",
    steps: [
      { id: "step-1", title: "Stand in front of the mirror" },
      { id: "step-2", title: "Follow the posture guidance" },
      { id: "step-3", title: "Complete the movement check" },
    ],
  },

  session: {
    stepIndex: 0,
    xp: 0,
    streak: 0,
  },

  actions: {
    setOverlays: (value) => set({ overlays: value }),

    nextStep: () =>
      set((state) => ({
        session: {
          ...state.session,
          stepIndex: Math.min(
            state.session.stepIndex + 1,
            state.routine.steps.length - 1,
          ),
        },
      })),

    resetSession: () =>
      set({
        session: {
          stepIndex: 0,
          xp: 0,
          streak: 0,
        },
      }),

    addXp: (value) =>
      set((state) => ({
        session: {
          ...state.session,
          xp: state.session.xp + value,
        },
      })),
  },
}));
