import React from 'react';

const TimeSlot = ({ time, event }) => (
    <div className="time-slot">
        <hr />
        <span>{time}</span>
        <p>{event}</p>
    </div>
);

function ScheduleBlock({ partOfDay, timeSlots }) {
    return (
        <div className="schedule-block">
        <h3>{partOfDay}</h3>

        <ul className="schedule-list">
            {timeSlots.map((slot, idx) => (
            <li className="schedule-row" key={idx}>
                <span className="schedule-time">{slot.time}</span>
                <span className="schedule-spacer" />
                <span className="schedule-event">{slot.event}</span>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default ScheduleBlock;
