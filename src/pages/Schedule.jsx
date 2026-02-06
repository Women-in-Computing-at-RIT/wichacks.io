import { Link } from 'react-router-dom';
import "../style/style.css";
import wip from "../assets/under_construction.png";

function Schedule() {
    return (
        <div className ="schedule section">
            <div className="schedule-background">
                <h2>Schedule</h2>
                <div className="schedule-boxes">
                    <img src={wip} alt="under construction"></img>
                </div>
            </div>
        </div>
    );
}

export default Schedule;