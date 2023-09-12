interface IBannerProps {
    art: string;
    year: string;
}

export default function Banner(props: IBannerProps) {
    const background = props.art;
    const year = props.year;

    return (
        <div id="landing-banner">
            <h1>{`MakeCode Summer ${year} Coding Challenge`}</h1>
            <h2>Learn to Code. Win cool prizes!</h2>
        </div>
    )

}