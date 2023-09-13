// import React from "react";
import { EyeRegular, RocketFilled } from "@fluentui/react-icons";
import {
    Body1,
    Caption1,
    Button,
    Avatar,
} from "@fluentui/react-components";
  
import {
    Card,
    CardFooter,
    CardHeader,
    CardPreview,
} from "@fluentui/react-components";

import '../styles/showcase.less'
import { router } from "../App";
import { Link } from "@tanstack/react-router";




const resolveAsset = (asset: string) => {
    return `https://makecode.com/api/${asset}/thumb`;
};

interface IShowcaseProps {
    difficulty: string;
    view: string;
    compData: ShowcaseData[];
}

export default function Showcase(props: IShowcaseProps) {
    const { view, difficulty, compData } = props;
    const buttonContent = view === "community" ? "View code" : "Try activity";
    const buttonIcon = view === "community" ? <EyeRegular fontSize={16} /> : <RocketFilled fontSize={16} />

    return (
        <div id="showcase" className={`${view} ${difficulty.toLowerCase()}`}>
            {compData.map((data) => {
                return (
                <Card key={data.contentId}>
                    <CardHeader
                        image={data.showAvatar ? <Avatar /> : undefined}
                        header={
                        <Body1>
                            <b>{data.headerTitle}</b>
                        </Body1>
                        }
                        description={<Caption1>{data.headerDescription}</Caption1>}
                    />

                    <CardPreview>
                        <img src={resolveAsset(data.contentId)} alt={data.previewAlt} />
                    </CardPreview>

                    <CardFooter>
                        {
                            data.relativeLink && <Link to="/overview/$activityId" params={{activityId: data.contentId}}>Try Activity</Link>
                        }
                        <Button icon={buttonIcon} onClick={() => window.open(data.contentLink, '_blank')}>{buttonContent}</Button>
                    </CardFooter>
                </Card>
                )
            })}

        </div>
    )

}