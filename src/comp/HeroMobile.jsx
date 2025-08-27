import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

export default function HeroM() {
    const targetDate = new Date("2025-09-10T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(targetDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    // Convert timeLeft into d/h/m/s
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
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

                <div className="m-overlay">
                    <div className="m-text">
                        <h2>LIVE IN !!</h2>
                    </div>
                    <div className="m-cont">
                        <div className="m-box">
                            <h1>{days}</h1>
                            <p>DAYS</p>

                        </div>
                        <div className="m-box">
                            <h1>{hours}</h1>
                            <p>HOURS</p>
                        </div>
                        <div className="m-box">
                            <h1>{minutes}</h1>
                            <p>MINUTES</p>
                        </div>
                        <div className="m-box">
                            <h1>{seconds}</h1>
                            <p>SECONDS</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
