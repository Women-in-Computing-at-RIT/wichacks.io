import React from 'react';

const TimeSlot = ({ time, event }) => (
    <div className="time-slot">
        <hr />
        <span>{time}</span>
        <p>{event}</p>
    </div>
);

function ScheduleBlock({ partOfDay, timeSlots, isMeal }) {
    return (
        <div className={`schedule-block ${isMeal ? 'schedule-block--meal' : ''}`} tabIndex="0" role="region" aria-label={partOfDay}>
        <h3>{partOfDay}</h3>

        {isMeal ? (
            <ul className="schedule-list schedule-list--meal">
                {timeSlots.map((slot, idx) => {
                    if (idx === 0) {
                        return (
                            <li className="schedule-row meal-header" key={idx}>
                                <span className="schedule-time">{slot.time}</span>
                                <span className="schedule-spacer" />
                                <span className="schedule-event">{slot.event}</span>
                            </li>
                        );
                    }
                    return (
                        <li key={idx}>
                            {slot.time && <span className="meal-item-time">{slot.time}</span>}
                            {slot.event && <span className="meal-item-text">{slot.event}</span>}
                        </li>
                    );
                })}
            </ul>
        ) : (
            <ul className="schedule-list">
                {timeSlots.map((slot, idx) => (
                <li className="schedule-row" key={idx}>
                    <span className="schedule-time">{slot.time}</span>
                    <span className="schedule-spacer" />
                    <span className="schedule-event">{slot.event}</span>
                </li>
                ))}
            </ul>
        )}
        </div>
    );
}

export default ScheduleBlock;
