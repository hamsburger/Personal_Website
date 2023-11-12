import React from "react";
import Intro from "./IntroPage/intro";
import ContentGrid from "./ContentPage/contentGrid";

export default function LandingPage(){
    return (
        <div className="Main">
            <Intro/>
            <ContentGrid/>
        </div>
    )
}