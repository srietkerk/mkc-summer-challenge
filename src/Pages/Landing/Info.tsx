import { Button } from "@fluentui/react-components";
import type { ButtonProps } from "@fluentui/react-components";

interface IInfoProps {

}


export default function Info(props: IInfoProps) {
    return (
        <div id="landing-info">
            <Button onClick={() => console.log("im getting clicked")}>Check it Out</Button>
        </div>
    )
}