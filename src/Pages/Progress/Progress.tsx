import { useState } from "react";
import Showcase from "../../common/Showcase";
import NavBar from "../../common/NavBar";
import DifficultySelector, { Difficulty } from "../../common/DifficultySelector";

export default function Progress() {
    const [difficulty, setDifficulty] = useState(Difficulty.beginner);

    return (
        <div id="progress-page">
            <NavBar />
            <div id="progress-page-content">
                <DifficultySelector changeDifficulty={setDifficulty} vertical={true} />
                <Showcase difficulty={difficulty} view="progress"/>
            </div>
        </div>
    )
}