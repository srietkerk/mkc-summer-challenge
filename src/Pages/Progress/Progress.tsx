import { useState } from "react";
import Showcase from "../../common/Showcase";
import NavBar from "../../common/NavBar";
import DifficultySelector, { Difficulty } from "../../common/DifficultySelector";

const beginnerProgressCardData: ShowcaseData[] = [
    {
        "headerTitle": "Intro to MakeCode Arcade",
        "relativeLink": true,
        "contentId": "_f4s6wcXyu5Fg",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Chase the Pizza",
        "relativeLink": true,
        "contentId": "_Y8VUmcHYsdsy",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Full of Stories",
        "relativeLink": true,
        "contentId": "32777-59846-95775-11055",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Create a Music Player",
        "relativeLink": true,
        "contentId": "39705-92830-48491-01106",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Tutorial of your choice",
        "relativeLink": true,
        "contentId": "27640-75402-47530-91242",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Skillmap of your choice",
        "relativeLink": true,
        "contentId": "13412-17300-80986-88577",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Pizza Party",
        "relativeLink": true,
        "contentId": "69052-09321-39220-20264",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Customize a tutorial",
        "relativeLink": true,
        "contentId": "07573-63879-62644-28924",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "How to Make a Platformer",
        "relativeLink": true,
        "contentId": "19410-44885-95661-59850",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    }
]

const intermediateProgressCardData: ShowcaseData[] = [
    {
        "headerTitle": "Whack the Mole",
        "relativeLink": true,
        "contentId": "_f4s6wcXyu5Fg",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Code an Adventure",
        "relativeLink": true,
        "contentId": "_Y8VUmcHYsdsy",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Galga in JavaScript",
        "relativeLink": true,
        "contentId": "32777-59846-95775-11055",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Create a Music Player",
        "relativeLink": true,
        "contentId": "39705-92830-48491-01106",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Happy Flower in Python",
        "relativeLink": true,
        "contentId": "27640-75402-47530-91242",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Your own summer-themed game!",
        "relativeLink": true,
        "contentId": "13412-17300-80986-88577",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "How to Make a Platformer",
        "relativeLink": true,
        "contentId": "19410-44885-95661-59850",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    }
]

const experiencedProgressCardData: ShowcaseData[] = [
    {
        "headerTitle": "Save the Galaxy",
        "relativeLink": true,
        "contentId": "_f4s6wcXyu5Fg",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Modify Perfect Fit",
        "relativeLink": true,
        "contentId": "_Y8VUmcHYsdsy",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Galga in JavaScript",
        "relativeLink": true,
        "contentId": "32777-59846-95775-11055",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Create a Music Player",
        "relativeLink": true,
        "contentId": "39705-92830-48491-01106",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Make a 5 Second Game",
        "relativeLink": true,
        "contentId": "27640-75402-47530-91242",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Make a summer-themed game in VSCode",
        "relativeLink": true,
        "contentId": "13412-17300-80986-88577",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    },
    {
        "headerTitle": "Participate in the Forum Game Jam",
        "relativeLink": true,
        "contentId": "69052-09321-39220-20264",
        "previewAlt": "Preview image for MakeCode arcade tutorial",
        "showAvatar": false
    }
]


export default function Progress() {
    const [difficulty, setDifficulty] = useState(Difficulty.beginner);

    const progressData = () => {
        switch (difficulty) {
            case "Intermediate":
                return intermediateProgressCardData;
            case "Experienced":
                return experiencedProgressCardData;
            case "Beginnner":
            default:
                return beginnerProgressCardData;
        }
    };

    return (
        <div id="progress-page">
            <NavBar />
            <div id="progress-page-content">
                <DifficultySelector changeDifficulty={setDifficulty} vertical={true} />
                <Showcase difficulty={difficulty} view="progress" compData={progressData()}/>
            </div>
        </div>
    )
}