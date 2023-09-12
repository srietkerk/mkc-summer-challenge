import React from "react";
import challenges from '../../../challenges.json';


interface IChallengeBannerProps {
    difficulty: string;
}


export default function ChallengeBanner() {
    return (
        <div id="challenge-banner">
            {challenges.day1}
        </div>
    )
}