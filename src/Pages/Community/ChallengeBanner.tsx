import React from "react";
import challenges from '../../../challenges.json';


interface IChallengeBannerProps {
    difficulty: string;
}


export default function ChallengeBanner() {
    return (
        <div id="challenge-banner">
            <div id="challenge-banner-content">
                <h2>Today's Challenge!</h2>
                {challenges.day1}
            </div>
        </div>
    )
}