import "../style/style.css";
import ScheduleBlock from "../page_components/ScheduleBlock";

function Schedule() {
    const schedule = [
        {
        label: "Saturday, February 28",
        slots: [
            { time: "10:00 AM", event: "Hacker Check-In" },
            { time: "12:00 PM", event: "Opening Ceremony" },
            { time: "12:30 PM", event: "Team Formation" },
            { time: "1:00 PM", event: "Hacking Begins & Lunch" },

            { time: "2:00-6:00 PM", event: "Tech Talks & Workshops" },
            { time: "6:00 PM", event: "Dinner" },
            { time: "7:00 PM", event: "Activities" },
            { time: "10:00 PM", event: "Midnight Snack" },
            { time: "11:00 PM", event: "Cup Stacking" },
        ],
        },
        {
        label: "Sunday, March 1",
        slots: [
            { time: "8:00 AM", event: "Breakfast" },
            { time: "12:00 PM", event: "Hacking Ends & Lunch" },
            { time: "1:00 PM", event: "Judging" },
            { time: "3:30 PM", event: "Closing Ceremony ends" },
        ],
        },
    ];

    return (
        <div className="schedule section">
        <div className="schedule-background">
            <h2>Schedule</h2>

            <div className="schedule-boxes">
            {schedule.map((day) => (
                <ScheduleBlock
                key={day.label}
                partOfDay={day.label}
                timeSlots={day.slots}
                />
            ))}
            </div>
        </div>
        </div>
    );
}

export default Schedule;