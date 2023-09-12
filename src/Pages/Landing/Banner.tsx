import React from "react";

interface IBannerProps {
    art: string;
    year: string;
}

export default function Banner(props: IBannerProps) {
    const background = props.art;
    const year = props.year;

    let bannerStyle: React.CSSProperties = {
        "--banner-image-url": `url(${background})`
    } as React.CSSProperties

    return (
        <div id="landing-banner" style={bannerStyle}>
            <h1>{`MakeCode Summer ${year} Coding Challenge`}</h1>
            <h2>Learn to Code. Win cool prizes!</h2>
        </div>
    )

}