import React from "react";
import { Button } from "@fluentui/react-components";
import { router } from "../../App";

interface IInfoProps {

}


export default function Info(props: IInfoProps) {
    // on check it out clicked, launch the community route
    return (
        <div id="landing-info">
            <div id="landing-info-content">
                <div id="landing-info-text">
                    <h3>What</h3>
                    <p>
                        The MakeCode Summer challenge is meant to help anyone learn to code in a fun way!
                        Meant for all experience levels, come and code with us this summer! You will engage with
                        a series of our skillmaps, tutorials, and editor to make some awesome games. We can't wait to
                        see what you'll come up with. Also, keep an eye out for our daily challenges so you can earn some
                        extra prizes and MakeCode swag!
                    </p>
                    <h3>When</h3>
                    <p>
                        June 26th - August 30th
                    </p>
                    <p> We're diving in all summer! </p>
                </div>
                <Button onClick={() => router.navigate({ to: "/community"}) }>Check it Out</Button>
            </div>
        </div>
    )
}