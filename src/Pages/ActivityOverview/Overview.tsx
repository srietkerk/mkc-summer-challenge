import { router } from "../../App";
import NavBar from "../../common/NavBar";
import {
    Body1,
    Caption1,
    Button,
} from "@fluentui/react-components";
  
import {
    Card,
    CardHeader,
    CardPreview,
} from "@fluentui/react-components";


interface IOverviewProps {
    activity: Activity;
}

const resolveAsset = (asset: string) => {
    return `https://makecode.com/api/${asset}/thumb`;
};

// we might be able to just make the overview a modal so there are less pages involved
// but this also might make things a bit distracting (maybe something to A/B test)
export default function Overiew(props: IOverviewProps) {
    const {
        title, 
        difficulty, 
        estimatedTime, 
        id,
        description
    } = { ...props.activity }


    return (
        <div id="activity-overview" className={title}>
            <NavBar view="overview"/>
            <Button onClick={() => router.navigate({ to: "/progress"}) }>Back</Button>
            <Card key={title} orientation="horizontal">
                <CardPreview>
                    <img src={resolveAsset(id)} alt="MakeCode summer challenge activity thumbnail" />
                </CardPreview>
                <CardHeader
                    header={
                    <Body1>
                        <b>{title}</b>
                    </Body1>
                    }
                    description={<Caption1>{`Difficulty: ${difficulty} | Time to complete: ${estimatedTime}`}</Caption1>}
                />
                <p>{description}</p>
                <Button onClick={() => window.open("https://arcade.makecode.com/", '_blank')}>Try it!</Button>
            </Card>
        </div>
    )
}