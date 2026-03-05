import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from "react";
import "../style/style.css";
import WiCLogo from "../assets/wichackslogo-darker.png";
import backgroundImage from "../assets/sleepy-widget.png";

function useCountdown(targetDate) {
    const [now, setNow] = useState(() => Date.now());
    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, []);
    return Math.max(0, targetDate - now);
}

function format(durationMs) {
    const totalSeconds = Math.floor(durationMs / 1000);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (n) => String(n).padStart(2, "0");
    return { days, hours: pad(hours), minutes: pad(minutes), seconds: pad(seconds) };
}

function Hero() {
    const target = useMemo(() => { return new Date("2026-02-28T12:00:00-05:00").getTime(); }, []);
    const remaining = useCountdown(target);
    const { days, hours, minutes, seconds } = format(remaining);
    const isLive = remaining === 0;

    return (
        <div className ="hero"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        > {/* background of img w widget in the middle */}
            <div className="hero-top">
                <img src={WiCLogo} alt="WiCHacks Logo" />
            </div>
            <div className="hero-devpost-link">
                <h3>Sign up for WiCHacks 2026!</h3>
                <a href="https://events.mlh.io/events/12595-wichacks-2026-in-rochester-ny" target="_blank" rel="noopener noreferrer">
                    <div className="button">Registration</div>
                </a>
            </div>
            <div className="hero-spacer"></div> {/* gives space on right so you can see widget */}
            <div className="hero-bottom">
                {/* <div className="countdown" role="timer" aria-live="polite">
                    <h2>Countdown to WiCHacks 2026</h2>
                    {isLive ? (
                        <div className="countdown-live">We're live!</div>
                    ) : (
                        <div className="countdown-grid">
                            <div className="countdown-box">
                                <div className="countdown-value">{days}</div>
                                <div className="countdown-label">Days</div>
                            </div>
                            <div className="countdown-box">
                                <div className="countdown-value">{hours}</div>
                                <div className="countdown-label">Hours</div>
                            </div>
                            <div className="countdown-box">
                                <div className="countdown-value">{minutes}</div>
                                <div className="countdown-label">Minutes</div>
                            </div>
                            <div className="countdown-box">
                                <div className="countdown-value">{seconds}</div>
                                <div className="countdown-label">Seconds</div>
                            </div>
                        </div>
                    )}
                </div> */}
            </div>
        </div>
    );
}

export default Hero;