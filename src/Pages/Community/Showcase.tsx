import React from "react";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";
import {
    makeStyles,
    Body1,
    Caption1,
    Button,
    shorthands,
} from "@fluentui/react-components";
  
import {
    Card,
    CardFooter,
    CardHeader,
    CardPreview,
} from "@fluentui/react-components";

interface IShowcaseProps {
    difficulty: string;
}

const resolveAsset = (asset: string) => {
    const ASSET_URL =
      "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/assets/";
  
    return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
    card: {
      ...shorthands.margin("auto"),
      width: "720px",
      maxWidth: "100%",
    },
});

export default function Showcase(props: IShowcaseProps) {
    const difficulty = props.difficulty;
    const styles = useStyles()

    // TODO: CHANGE THIS TO INCLUDE LOTS OF CARDS WITH DUMMY DATA
    // MAYBE EVEN INCLUDE THE overflow COMPONENT FROM FLUENT UI
    return (
        <div id="community-content" className={difficulty}>
            <Card className={styles.card}>
                <CardHeader
                    image={
                    <img
                        src={resolveAsset("avatar_elvia.svg")}
                        alt="Elvia Atkins avatar picture"
                    />
                    }
                    header={
                    <Body1>
                        <b>Elvia Atkins</b> mentioned you
                    </Body1>
                    }
                    description={<Caption1>5h ago · About us - Overview</Caption1>}
                />

                <CardPreview
                    logo={
                    <img src={resolveAsset("docx.png")} alt="Microsoft Word document" />
                    }
                >
                    <img
                    src={resolveAsset("doc_template.png")}
                    alt="Preview of a Word document: About Us - Overview"
                    />
                </CardPreview>

                <CardFooter>
                    <Button icon={<ArrowReplyRegular fontSize={16} />}>Reply</Button>
                    <Button icon={<ShareRegular fontSize={16} />}>Share</Button>
                </CardFooter>
            </Card>
        </div>
    )

}