export const createRewardsSlice = (set) => ({
    rewardsEarned: [],
    addReward: (reward) => set((state) => ({ rewardsEarned: state.rewardsEarned.append(reward)}))
})