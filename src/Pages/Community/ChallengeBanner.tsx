// import React from "react";
import { useEffect } from 'react';
import { useChallengeStore } from '../../state/ChallengeSlice';

const challenges = ["Add this song to your game", "Add this sprite to your game", "Use this extension in your game"]

export default function ChallengeBanner() {
    const currentChallenge = useChallengeStore((state) => state.currentChallenge);
    const currentChallengeEnd = useChallengeStore((state) => state.challengeEndTime);
    const setChallengeEnd = useChallengeStore((state) => state.setCurrentChallenge);
    const setCurrentChallenge = useChallengeStore((state) => state.setCurrentChallenge);

    useEffect(() => {
        if (Date.now() >= currentChallengeEnd) {
            setChallengeEnd();
            setCurrentChallenge();
        }
    }, [])

    return (
        <div id="challenge-banner">
            <div id="challenge-banner-content">
                <h2>Today's Challenge!</h2>
                {challenges[currentChallenge]}
            </div>
        </div>
    )
}