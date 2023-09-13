import { useState } from "react";
import ChallengeBanner from "./ChallengeBanner";
import NavBar from "../../common/NavBar";
import DifficultySelector, { Difficulty } from "../../common/DifficultySelector";
import Showcase from "../../common/Showcase";
import '../../styles/community.less'

export default function Community() {
    const [difficulty, setDifficulty] = useState(Difficulty.beginner);

    return (
        <div id="community-page">
            <NavBar />
            <ChallengeBanner />
            <DifficultySelector changeDifficulty={setDifficulty}/>
            <div id="community-content">
                <h2 className="community-content-title">{`${difficulty} submissions`}</h2>
                <Showcase difficulty={difficulty} view="community" />
            </div>
        </div>
    )
}