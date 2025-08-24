import react, { useEffect, useState } from 'react'
import Navbar from './Navbar'

export default function Hero() {
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
        <div className='hero'>
            <Navbar></Navbar>
            <div className="counter">
                <div className="logo">
                    <img src="/logo.png" alt="" srcset="" className='logo' />
                </div>
                <div class="flip-unit">
                    <span class="label">DAYS</span>
                    <div class="digit" id="days">{days}</div>
                </div>
                <div class="flip-unit">
                    <span class="label">HRS</span>
                    <div class="digit" id="hours">{hours}</div>
                </div>
                <div class="flip-unit">
                    <span class="label">MIN</span>
                    <div class="digit" id="minutes">{minutes}</div>
                </div>
                <div class="flip-unit">
                    <span class="label">SEC</span>
                    <div class="digit" id="seconds">{seconds}</div>
                </div>
            </div>
        </div>
    )
}
