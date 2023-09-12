import React, { useState } from "react";
import { Avatar, Button } from "@fluentui/react-components";
import { router } from "../App";
import '../styles/navbar.less'

interface INavProps {
    loggedIn: boolean;
}


export default function NavBar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const navClass = loggedIn ? "logged-in" : "logged-out";

    const avatarClicked = () => {
        setLoggedIn(!loggedIn);
    }

    return (
        <div id="nav-bar" className={navClass}>
            <Button onClick={() => router.navigate({ to: "/progress"}) }>Get Started</Button>
            <Avatar onClick={avatarClicked}/>
        </div>
    )
}