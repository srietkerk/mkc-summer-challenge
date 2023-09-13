import React from "react";
import { ArrowReplyRegular, ShareRegular, EyeRegular } from "@fluentui/react-icons";
import {
    makeStyles,
    Body1,
    Caption1,
    Button,
    shorthands,
    Avatar,
} from "@fluentui/react-components";
  
import {
    Card,
    CardFooter,
    CardHeader,
    CardPreview,
} from "@fluentui/react-components";

const beginnerCardCommunityData = [
    {
        "header-img": "path-to-img (or fetch)",
        "header-img-alt": "John Doe profile picture",
        "header-body-name": "John Doe",
        "activity-submitted": "Chase the Pizza",
        "time-submitted": "12345678",
        "share-link": "https://makecode.com/_YAJF9d7AR9cK",
        "share-id": "_YAJF9d7AR9cK"
    },
    {
        "header-img": "path-to-img (or fetch)",
        "header-img-alt": "Christy Crayon profile picture",
        "header-body-name": "Christy Crayon",
        "activity-submitted": "Create a music player",
        "time-submitted": "12345679",
        "share-link": "https://makecode.com/_UTFhwWd5fEDp",
        "share-id": "_UTFhwWd5fEDp"
    },
    {
        "header-img": "path-to-img (or fetch)",
        "header-img-alt": "Pauly Pencil profile picture",
        "header-body-name": "Pauly Pencil",
        "activity-submitted": "Pizza Party",
        "time-submitted": "12345678",
        "share-link": "https://makecode.com/_f4s6wcXyu5Fg",
        "share-id": "_f4s6wcXyu5Fg"
    }
]

const resolveAsset = (asset: string) => {
    return `https://makecode.com/api/${asset}/thumb`;
};

interface IShowcaseProps {
    difficulty: string;
    view: string;
}

export default function Showcase(props: IShowcaseProps) {
    const { view, difficulty } = props;

    // TODO: Make the data that is shown change based on the difficulty that is fed here
    return (
        <div id="showcase" className={`${view} ${difficulty}`}>
            {beginnerCardCommunityData.map((data) => {
                return (
                <Card>
                    <CardHeader
                        image={<Avatar />}
                        header={
                        <Body1>
                            <b>{data["header-body-name"]}</b>
                        </Body1>
                        }
                        description={<Caption1>{data["activity-submitted"]}</Caption1>}
                    />

                    <CardPreview>
                        <img src={resolveAsset(data["share-id"])} alt="Microsoft MakeCode game thumbnail" />
                    </CardPreview>

                    <CardFooter>
                        <Button icon={<EyeRegular fontSize={16} />} onClick={() => window.open(data["share-link"], '_blank')}>View Code</Button>
                    </CardFooter>
                </Card>
                )
            })}

        </div>
    )

}