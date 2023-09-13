// import React, { useState } from "react";
import { Difficulty } from "./Community";
import {
    makeStyles,
    shorthands,
    Tab,
    TabList,
} from "@fluentui/react-components";

import type { 
    SelectTabData ,
    SelectTabEvent,
    SelectTabEventHandler,
} from "@fluentui/react-components";


interface IDifficultySelectorProps {
    changeDifficulty: (diff: Difficulty) => void;
}

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


export default function DifficultySelector(props: IDifficultySelectorProps) {
    const changeDifficulty  = props.changeDifficulty;
    const styles = useStyles();
    // @ts-ignore
    const onTabSelect: SelectTabEventHandler = (event: SelectTabEvent, data: SelectTabData) => {
        switch (data.value) {
            case "mid":
                changeDifficulty(Difficulty.mid);
                break;
            case "experienced":
                changeDifficulty(Difficulty.experienced);
                break;
            case "beginner":
            default:
                changeDifficulty(Difficulty.beginner);
                break;
        }
    };

    return (
        <div id="difficulty-selector" className={styles.root}>
            <TabList onTabSelect={onTabSelect}>
                <Tab value="beginner">Beginner</Tab>
                <Tab value="mid">Intermediate</Tab>
                <Tab value="experienced">Experienced</Tab>
            </TabList>
        </div>
    )
}