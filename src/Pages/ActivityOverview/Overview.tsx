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
            <NavBar />
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
            </Card>
        </div>
    )
}