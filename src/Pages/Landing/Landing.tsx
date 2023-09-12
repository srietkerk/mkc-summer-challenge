/// <reference path="../../../typings/config.d.ts" />
import React from "react";
import Banner from "./Banner";
import Info from "./Info";


export default function Landing(config: any) {
    const { bannerArt, year } = config;

    return (
        <div id="landing">
            <Banner art={bannerArt} year={year} />
            <Info/>
        </div>
    )

}