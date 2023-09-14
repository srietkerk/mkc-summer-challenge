import { create } from "zustand";
interface ChallengeState {
    currentChallenge: number;
    challengeEndTime: number;
    setCurrentChallenge: () => void;
}

export const useChallengeStore = create<ChallengeState>()((set) => ({
    currentChallenge: 0,
    challengeEndTime: 1694657073528,
    setCurrentChallenge: () => set((state) => ({ currentChallenge: state.currentChallenge + 1 })),
    setChallengeEndTime: () => set((state) => ({ challengeEndTime: state.challengeEndTime + (60 * 60 * 24 * 1000)}))
}))