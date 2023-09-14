import { create } from "zustand";
import { createAuthSlice } from './AuthSlice';
import { createChallengeSlice } from './ChallengeSlice';
import { createRewardsSlice } from './RewardsSlice'
import { 
    createActivitiesCompletedSlice,
    createBeginnerActivitiesStartedSlice,
    createExperiencedActivitiesStartedSlice,
    createIntermediateActivitiesStartedSlice
} from './ActivitiesSlice';


export const useBoundStore = create((...a) => ({
    ...createBeginnerActivitiesStartedSlice(...a),
    ...createIntermediateActivitiesStartedSlice(...a),
    ...createExperiencedActivitiesStartedSlice(...a),
    ...createActivitiesCompletedSlice(...a),
    ...createAuthSlice(...a),
    ...createRewardsSlice(...a),
    ...createChallengeSlice(...a)
}))