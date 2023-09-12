import React from "react";
import challenges from '../../../challenges.json';


interface IChallengeBannerProps {
    difficulty: string;
}


export default function ChallengeBanner() {
    console.log(challenges.day1);
    return (
        <div id="challenge-banner">
            {challenges.day1}
        </div>
    )
}