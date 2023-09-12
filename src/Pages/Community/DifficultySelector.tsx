import React, { useState } from "react";
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
    const onTabSelect = (event: SelectTabEvent, data: SelectTabData) => {
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
                <Tab value="mid">Some Experience</Tab>
                <Tab value="experienced">Experienced</Tab>
            </TabList>
        </div>
    )
}