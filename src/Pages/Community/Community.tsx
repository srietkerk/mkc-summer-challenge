import { useState } from "react";
import ChallengeBanner from "./ChallengeBanner";
import NavBar from "../../common/NavBar";
import DifficultySelector, { Difficulty } from "../../common/DifficultySelector";
import Showcase from "../../common/Showcase";
import '../../styles/community.less'

const beginnerCardCommunityData: ShowcaseData[] = [
    {
        "avatarImg": "path-to-img (or fetch)",
        "avatarAlt": "John Doe profile picture",
        "showAvatar": true,
        "headerTitle": "John Doe",
        "headerDescription": "Chase the Pizza",
        "previewAlt": "12345678",
        "contentLink": "https://makecode.com/_YAJF9d7AR9cK",
        "contentId": "_YAJF9d7AR9cK"
    },
    {
        "avatarImg": "path-to-img (or fetch)",
        "avatarAlt": "Christy Crayon profile picture",
        "showAvatar": true,
        "headerTitle": "Christy Crayon",
        "headerDescription": "Create a music player",
        "previewAlt": "12345679",
        "contentLink": "https://makecode.com/_UTFhwWd5fEDp",
        "contentId": "_UTFhwWd5fEDp"
    },
    {
        "avatarImg": "path-to-img (or fetch)",
        "avatarAlt": "Pauly Pencil profile picture",
        "showAvatar": true,
        "headerTitle": "Pauly Pencil",
        "headerDescription": "Pizza Party",
        "previewAlt": "12345678",
        "contentLink": "https://makecode.com/_f4s6wcXyu5Fg",
        "contentId": "_f4s6wcXyu5Fg"
    }
]

const intermediateCardCommunityData: ShowcaseData[] = [
    {
        "avatarImg": "path-to-img (or fetch)",
        "avatarAlt": "John Dane profile picture",
        "showAvatar": true,
        "headerTitle": "John Dane",
        "headerDescription": "Galga",
        "previewAlt": "12345678",
        "contentLink": "https://makecode.com/_YAJF9d7AR9cK",
        "contentId": "_YAJF9d7AR9cK"
    },
    {
        "avatarImg": "path-to-img (or fetch)",
        "avatarAlt": "Christy Crayola profile picture",
        "showAvatar": true,
        "headerTitle": "Christy Crayola",
        "headerDescription": "Happy Flower",
        "previewAlt": "12345679",
        "contentLink": "https://makecode.com/_UTFhwWd5fEDp",
        "contentId": "_UTFhwWd5fEDp"
    },
    {
        "avatarImg": "path-to-img (or fetch)",
        "avatarAlt": "Pauly Petunia profile picture",
        "showAvatar": true,
        "headerTitle": "Pauly Petunia",
        "headerDescription": "Summer-themed game",
        "previewAlt": "A game that was made!!",
        "contentLink": "https://makecode.com/_f4s6wcXyu5Fg",
        "contentId": "_f4s6wcXyu5Fg"
    }
]

const experiencedCardCommunityData: ShowcaseData[] = [
    {
        "headerTitle": "John Dexterity",
        "headerDescription": "Save the Galaxy",
        "showAvatar": true,
        "avatarImg": "path-to-img (or fetch)",
        "avatarAlt": "John Dexterity profile picture",
        "previewAlt": "A game that was made!!",
        "contentLink": "https://makecode.com/_YAJF9d7AR9cK",
        "contentId": "_YAJF9d7AR9cK"
    },
    {
        "avatarImg": "path-to-img (or fetch)",
        "avatarAlt": "Christy Crabby profile picture",
        "showAvatar": true,
        "headerTitle": "Christy Crabby",
        "headerDescription": "Perfect Fit - Modified",
        "previewAlt": "A game that was made!!",
        "contentLink": "https://makecode.com/_UTFhwWd5fEDp",
        "contentId": "_UTFhwWd5fEDp"
    },
    {
        "avatarImg": "path-to-img (or fetch)",
        "avatarAlt": "Pauly Purple profile picture",
        "showAvatar": true,
        "headerTitle": "Pauly Purple",
        "headerDescription": "Game Jam submission",
        "previewAlt": "A game that was made!!",
        "contentLink": "https://makecode.com/_f4s6wcXyu5Fg",
        "contentId": "_f4s6wcXyu5Fg"
    }
]

export default function Community() {
    const [difficulty, setDifficulty] = useState(Difficulty.beginner);

    const communityData = () => {
        switch (difficulty) {
            case "Intermediate":
                return intermediateCardCommunityData;
            case "Experienced":
                return experiencedCardCommunityData;
            case "Beginnner":
            default:
                return beginnerCardCommunityData;
        }
    };

    return (
        <div id="community-page">
            <NavBar view="community"/>
            <ChallengeBanner />
            <DifficultySelector changeDifficulty={setDifficulty}/>
            <div id="community-content">
                <h2 className="community-content-title">{`${difficulty} submissions`}</h2>
                <Showcase difficulty={difficulty} view="community" compData={communityData()}/>
            </div>
        </div>
    )
}