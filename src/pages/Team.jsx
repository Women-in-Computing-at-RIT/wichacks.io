import "../style/style.css";
import TeamMember from "../page_components/TeamMember";

import profpic from "../assets/default-avatar.jpg";
import director from "../assets/team_members/WiCHacks Director - Darwin Tran.jpg";
import logistics1 from "../assets/team_members/Logistics Co-Director - Meghan Tomback.jpg";
import logistics2 from  "../assets/team_members/Logistics Co-Director - Kaitlyn Dudek.jpg";
import sponsorship from "../assets/team_members/Sponsorship Director - Sydney Wilson.JPG";
import marketing1 from "../assets/team_members/Marketing Co-Director - Katelyn Clark.jpg";
import marketing2 from  "../assets/team_members/Marketing Co-Director - Daisyanet Loza-Claudio.png";
import judging from "../assets/team_members/Judging Director - Kate Granger.jpg";
import technology from "../assets/team_members/Technology Director - Elsa Smolarz.jpg";
// import volunteer1 from "../assets/team_members/Volunteer Lead - Katherine Granger.jpg";
// import volunteer2 from "../assets/team_members/Volunteer Lead - Shriya Shah.jpg";

const team_members = [
    { image: director, name: "Darwin Tran", role: "WiCHacks Lead Director" },
    { image: logistics1, name: "Meghan Tomback", role: "Logistics Co-Director" },
    { image: logistics2, name: "Kaitlyn Dudek", role: "Logistics Co-Director" },
    { image: sponsorship, name: "Sydney Wilson", role: "Sponsorship Director" },
    { image: marketing1, name: "Katelyn Clark", role: "Marketing Co-Director" },
    { image: marketing2, name: "Daisyanet Loza-Claudio", role: "Marketing Co-Director" },
    { image: judging, name: "Kate Granger", role: "Judging Director" },
    { image: technology, name: "Elsa Smolarz", role: "Technology Director" },
    // { image: volunteer1, name: "Katherine Granger", role: "Volunteer Lead" },
    // { image: volunteer2, name: "Shriya Shah", role: "Volunteer Lead" },
];

function Team() {
    const loopMembers = [...team_members];

    return (
        <section className="team section" id="team">
            <div className="team-inner">
                <h2>WiCHacks Leadership Team</h2>

                <div className="team-marquee" aria-label="WiCHacks Leadership Team carousel">
                    <div className="team-track">
                        {Array.from({ length: 2 }, (_, copyIndex) => (
                            <div
                                className="team-group"
                                aria-hidden={copyIndex === 1}
                                key={`team-group-${copyIndex}`}
                            >
                                {loopMembers.map((member) => (
                                    <TeamMember
                                        key={`${copyIndex}-${member.name}`}
                                        image={member.image}
                                        name={member.name}
                                        role={member.role}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;