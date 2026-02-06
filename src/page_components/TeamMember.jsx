import React from 'react';
import "../style/style.css";

// template for a team member box to be mapped to team page
    // includes image, name, & role
    // no social media links

function TeamMember({ image, name, role }) {
    return (
        <div className="team-member">
            <img src={image} alt={`${name}'s profile`} className="team-member-image" />
            <h3 className="team-member-name">{name}</h3>
            <p className="team-member-role">{role}</p>
        </div>
    );
}

// return the component
export default TeamMember;