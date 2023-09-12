import React from "react";
import { Button } from "@fluentui/react-components";
import { Link } from '@tanstack/react-router'

interface IInfoProps {

}


export default function Info(props: IInfoProps) {
    // on check it out clicked, launch the community route
    return (
        <div id="landing-info">
            <Link to="/community">Check it Out</Link>
            {/* <Button onClick={() => console.log("im getting clicked")}>Check it Out</Button> */}
        </div>
    )
}