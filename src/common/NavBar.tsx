import React, { useState } from "react";
import { Avatar, Button } from "@fluentui/react-components";

interface INavProps {
    loggedIn: boolean;
}


export default function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const navClass = loggedIn ? "logged-in" : "logged-out";

    const avatarClicked = () => {
        console.log("avatar was clicked");
        setLoggedIn(!loggedIn);
    }

    return (
        <div id="nav-bar" className={navClass}>
            <Button onClick={() => console.log("im getting clicked")}>Get Started</Button>
            <Avatar onClick={avatarClicked}/>
        </div>
    )
}