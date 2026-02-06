import { Link } from 'react-router-dom';
import "../style/style.css";
import about_photo from "../assets/ritchie-wichacks.JPG";

function About() {
    return (
        <div className ="about section">
            <h2>About WiCHacks</h2>
            <div className="description">
                <div className="about-left">
                    <p>The Women in Computing Hackathon (WiCHacks) mission is to <strong>enhance opportunities for students who identify as women or gender minorities in the tech industry</strong> and all students who support them, regardless of gender or sex. WiCHacks values <strong>diversity and inclusion</strong> as essential to our mission and welcomes anyone in support of moving this mission forward, including those of other genders or sex, to sign up for the hackathon. Hosted by Women in Computing (WiC) at Rochester Institute of Technology (RIT), the hackathon is a 24-hour, collaborative programming event in which participants create an app, website, game, or other piece of software throughout the event!</p>
                    <div className="inclusion-disclaimer">
                        <p><strong>This event is open to all skill levels:</strong> from students who haven't programmed at all, to the best programmers out there, it will be a great day to learn, invent, and create the future!</p>
                    </div>
                </div>
                <div className="about-right">
                    <img src={about_photo} alt="RITchie mascot checking in at WiCHacks" />
                    <h3>More coverage:</h3>
                    <p>
                        <a href="https://spectrumlocalnews.com/nys/rochester/news/2024/03/02/preset-halena-sepulveda-scaffold?cid=share_clip?cid=share_clip" target="_blank" rel="noopener noreferrer">Spectrum News</a> - 
                        <a href="https://theithacan.org/news/women-in-computing-team-wins-award-for-community-service-app/" target="_blank" rel="noopener noreferrer">The Ithacan</a> - 
                        <a href="https://13wham.com/news/local/all-girl-hackathon-at-rit-highlights-growing-interest-of-coding-among-women" target="_blank" rel="noopener noreferrer">13WHAM</a> - 
                        <a href="https://stories.mlh.io/community-roundup-empowering-safety-security-and-diversity-caaf07022edc?gi=b52cef6b6cd8" target="_blank" rel="noopener noreferrer">MLH Stories</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;