import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from "react";
import "../style/style.css";
import WiCLogo from "../assets/wichackslogo-darker.png";
import backgroundImage from "../assets/sleepy-widget.png";

const WiCHacksDate = new Date("2027-02-27T12:00:00-05:00");

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
    const target = useMemo(() => { return WiCHacksDate.getTime(); }, []);
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
                <h3>Checkout projects from 2026!</h3>
                <a href="https://wichacks-26.devpost.com/?_gl=1*v4e3ds*_gcl_au*ODg4ODE5MDEyLjE3NzM4Njk4MzM.*_ga*NjU2MzQ5MjUuMTc3Mzg2OTgzMw..*_ga_0YHJK3Y10M*czE3NzQ0NzM2ODIkbzIkZzAkdDE3NzQ0NzM2ODIkajYwJGwwJGgw" target="_blank" rel="noopener noreferrer">
                    <div className="button">Devpost</div>
                </a>
            </div>
            <div className="hero-spacer"></div> {/* gives space on right so you can see widget */}
            <div className="hero-bottom">
                <div className="countdown" role="timer" aria-live="polite">
                    <h2>Countdown to WiCHacks 2026</h2>
                    {isLive ? (
                        <div className="countdown-live">WiCHacks is live!</div>
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
                </div>
            </div>
        </div>
    );
}

export default Hero;