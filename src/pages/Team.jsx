import "../style/style.css";
import TeamMember from "../page_components/TeamMember";

import profpic from "../assets/default-avatar.jpg";
import director from "../assets/team_members/WiCHacks Director - Darwin Tran.jpg";
import logistics1 from "../assets/team_members/Logistics Co-Director - Meghan Briskey.jpeg";
import logistics2 from  "../assets/team_members/Logistics Co-Director - Arianna Schwartz.jpg";
import sponsorship from "../assets/team_members/Sponsorship Director - Katherine Collier.JPG";
import marketing from  "../assets/team_members/Marketing Director - Sydney Wilson.jpg";
import judging from "../assets/team_members/Judging Director - Kaitlyn Dudek.jpg";
import technology from "../assets/team_members/Technology Director - Jennie Li.jpeg";
import webmaster from "../assets/team_members/Web Director - Meghan Tomback.jpg";
import volunteer1 from "../assets/team_members/Volunteer Lead - Katherine Granger.jpg";
import volunteer2 from "../assets/team_members/Volunteer Lead - Shriya Shah.jpg";

const team_members = [
    { image: director, name: "Darwin Tran", role: "WiCHacks Lead Director" },
    { image: logistics1, name: "Meghan Briskey", role: "Logistics Co-Director" },
    { image: logistics2, name: "Arianna Schwartz", role: "Logistics Co-Director" },
    { image: sponsorship, name: "Katherine Collier", role: "Sponsorship Director" },
    { image: marketing, name: "Sydney Wilson", role: "Marketing Director" },
    { image: judging, name: "Kaitlyn Dudek", role: "Judging Director" },
    { image: technology, name: "Jennie Li", role: "Technology Director" },
    { image: webmaster, name: "Meghan Tomback", role: "Web Director" },
    { image: volunteer1, name: "Katherine Granger", role: "Volunteer Lead" },
    { image: volunteer2, name: "Shriya Shah", role: "Volunteer Lead" },
];

function Team() {
    const loopMembers = [...team_members];

    return (
        <section className="team section" id="team">
            <div className="team-inner">
                <h2>WiCHacks Leadership Team</h2>

                <div className="team-marquee" aria-label="WiCHacks Leadership Team carousel">
                    <div className="team-track">
                    {loopMembers.map((member, index) => (
                        <TeamMember
                        key={index}
                        image={member.image}
                        name={member.name}
                        role={member.role}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;