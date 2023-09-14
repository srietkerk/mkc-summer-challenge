
export const createBeginnerActivitiesStartedSlice = (set) => ({
    beginnerActivitiesStarted: [],
    totalBeginnerActivities: 10,
    addStartedActivity: (activity) => set((state) => ({ beginnerActivitiesStarted: state.beginnerActivitiesStarted.append(activity) }))
})

export const createIntermediateActivitiesStartedSlice = (set) => ({
    intermediateActivitiesStarted: [],
    totalIntermediateActivities: 8,
    addStartedActivity: (activity) => set((state) => ({
        intermediateActivitiesStarted: state.intermediateActivitiesStarted.append(activity) 
    }))
})

export const createExperiencedActivitiesStartedSlice = (set) => ({
    experiencedActivitiesStarted: [],
    totalExperiencedActivities: 7,
    addStartedActivity: (activity) => set((state) => ({
        experiencedActivitiesStarted: state.experiencedActivitiesStarted.append(activity) 
    }))
})

// going to leave this as globally completed for now, but may want to change this in the future
export const createActivitiesCompletedSlice = (set) => ({
    activitiesCompleted: [],
    addCompletedActivity: (activity) => set((state) => ({ activitiesCompleted: state.activitiesCompleted.append(activity) }))
})