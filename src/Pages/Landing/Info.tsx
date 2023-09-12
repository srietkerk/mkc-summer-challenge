import React from "react";
import { Button } from "@fluentui/react-components";
import { Link, Router } from '@tanstack/react-router'
import { router } from "../../App";

interface IInfoProps {

}


export default function Info(props: IInfoProps) {
    // on check it out clicked, launch the community route
    return (
        <div id="landing-info">
            {/* <Link to="/community">Check it Out</Link> */}
            <Button onClick={() => router.navigate({ to: "/community"}) }>Check it Out</Button>
        </div>
    )
}