import { useState } from "react";
import { Avatar, Button } from "@fluentui/react-components";
import { router } from "../App";
import '../styles/navbar.less'

interface INavProps {
    // loggedIn: boolean;
    view: string;
}


export default function NavBar(props: INavProps) {
    const { view } = props;
    const [loggedIn, setLoggedIn] = useState(false);
    const navClass = loggedIn ? "logged-in" : "logged-out";

    const avatarClicked = () => {
        setLoggedIn(!loggedIn);
    }

    const navButton = () => {
        if (view === "community") {
            return <Button onClick={() => router.navigate({ to: "/progress"}) }>Get Started</Button>
        } else {
            return <Button onClick={() => router.navigate({ to: "/community"}) }>Community</Button>

        }
    }

    return (
        <div id="nav-bar" className={navClass}>
            {navButton()}
            <Avatar onClick={avatarClicked}/>
        </div>
    )
}