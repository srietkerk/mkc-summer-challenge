import React from "react";
import { Button } from "@fluentui/react-components";
import { router } from "../../App";

interface IInfoProps {

}


export default function Info(props: IInfoProps) {
    // on check it out clicked, launch the community route
    return (
        <div id="landing-info">
            <Button onClick={() => router.navigate({ to: "/community"}) }>Check it Out</Button>
        </div>
    )
}