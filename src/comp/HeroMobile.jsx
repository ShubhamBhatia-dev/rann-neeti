import React from "react";
import Navbar from "./Navbar";

export default function HeroM() {
    return (
        <>

            <div className="video-cont">
                <Navbar></Navbar>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src="/background/hero.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </>
    );
}
