import React, { useState } from "react";
import ChallengeBanner from "./ChallengeBanner";
import NavBar from "../../common/NavBar";
import DifficultySelector from "./DifficultySelector";
import Showcase from "../../common/Showcase";
import '../../styles/community.less'

export enum Difficulty {
    beginner,
    mid,
    experienced
}

export default function Community() {
    const [difficulty, setDifficulty] = useState(Difficulty.beginner);
    const contentClass = changeDifficulty();

    function changeDifficulty() : string {
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
            <div id="community-content">
                <h2 className="community-content-title">{`${contentClass} submissions`}</h2>
                <Showcase difficulty={contentClass} view="community" />
            </div>
        </div>
    )
}