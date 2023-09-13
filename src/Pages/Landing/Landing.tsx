import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import config from '../../../appconfig.json'
import '../../styles/landing.less'


export default function Landing() {
    const { bannerArt, year, backgroundColor, textColor } = config;

    let landingStyle: React.CSSProperties = {
        "--landing-back-color": `${backgroundColor}`,
        "--landing-text-color": `${textColor}`
    } as React.CSSProperties

    return (
        <div id="landing" style={landingStyle}>
            <Banner art={bannerArt} year={year} />
            <Info/>
        </div>
    )

}