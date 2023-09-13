import React, { useState } from "react";
import {
    makeStyles,
    shorthands,
    Tab,
    TabList,
} from "@fluentui/react-components";

import type { 
    SelectTabData ,
    SelectTabEvent,
} from "@fluentui/react-components";
import Showcase from "../../common/Showcase";
import { Difficulty } from "../Community/Community";
import NavBar from "../../common/NavBar";


const useStyles = makeStyles({
    root: {
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      ...shorthands.padding("50px", "20px"),
      rowGap: "20px",
    },
});

export default function Progress() {
    const [difficulty, setDifficulty] = useState(Difficulty.beginner);
    const contentClass = changeDifficulty();

    function changeDifficulty() : string {
        switch (difficulty) {
            case Difficulty.mid:
                return "intermediate"
            case Difficulty.experienced:
                return "experienced"
            case Difficulty.beginner:
            default:
                return "beginner"
        }
    }

    const styles = useStyles();
    const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
        switch (data.value) {
            case "mid":
                setDifficulty(Difficulty.mid);
                break;
            case "experienced":
                setDifficulty(Difficulty.experienced);
                break;
            case "beginner":
            default:
                setDifficulty(Difficulty.beginner);
                break;
        }
    };

    return (
        <div id="progress-page" className={styles.root}>
            <NavBar />
            <div id="progress-page-content">
                <TabList onTabSelect={onTabSelect} vertical>
                    <Tab value="beginner">Beginner</Tab>
                    <Tab value="mid">Intermediate</Tab>
                    <Tab value="experienced">Experienced</Tab>
                </TabList>
                <Showcase difficulty={contentClass} view="progress"/>
            </div>
        </div>
    )
}