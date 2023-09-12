import React, { useState } from "react";
import ChallengeBanner from "./ChallengeBanner";
import NavBar from "../../common/NavBar";
import DifficultySelector from "./DifficultySelector";
import Showcase from "./Showcase";


interface ICommunityProps {
}

export enum Difficulty {
    beginner,
    mid,
    experienced
}

export default function Community() {
    const [difficulty, setDifficulty] = useState(Difficulty.beginner);
    const contentClass = changeDifficulty();

    function changeDifficulty() : string {
        console.log("we are changing the difficulty");
        switch (difficulty) {
            case Difficulty.mid:
                return "some-experience"
            case Difficulty.experienced:
                return "experienced"
            case Difficulty.beginner:
            default:
                return "beginner"
        }
    }
    return (
        <div id="community-page">
            <NavBar />
            <ChallengeBanner />
            <DifficultySelector changeDifficulty={setDifficulty}/>
            <Showcase difficulty={contentClass} />
        </div>
    )
}