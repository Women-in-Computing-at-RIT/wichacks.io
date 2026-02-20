import "../style/style.css";
import ScheduleBlock from "../page_components/ScheduleBlock";

function Schedule() {
    const schedule = [
        {
        label: "Saturday Morning, 2/28",
        slots: [
            { time: "10:00 AM", event: "Hacker Check-In Begins" },
            { time: "12:00 PM", event: "Opening Ceremony" },
            { time: "12:30 PM", event: "Team Formation Event" },
            { time: "1:00 PM", event: "Hacking Begins" },
        ],
        },
        {
        label: "Saturday Lunch, 2/28",
        slots: [
            { time: "1:00 PM", event: "Wegmans Assorted Subs" },
        ],
        },
        {
        label: "Saturday Afternoon, 2/28",
        slots: [
            { time: "2:00 PM", event: "COMS DevPost Talk" },
            { time: "2:30 PM", event: "CSL Sponsor Symposium" },
            { time: "2:30 PM", event: "SSE Hardware Lab Workshop" },
            { time: "4:00 PM", event: "Wegmans Sponsor Symposium" },
            { time: "5:30 PM", event: "MLH Workshop" },
        ],
        },
        {
        label: "Saturday Dinner, 2/28",
        slots: [
            { time: "6:00 PM", event: "Olive Garden Pasta & Breadsticks" },
        ],
        },
        {
        label: "Saturday Evening, 2/28",
        slots: [
            { time: "7:00 PM", event: "Air Plant Terrarium Bar" },
            { time: "8:00 PM", event: "MLH Workshop" },
            { time: "9:00 PM", event: "Rock Painting" },
            { time: "10:00 PM", event: "CSL's Midnight Snack" },
            { time: "11:00 PM", event: "Cup Stacking" },
        ],
        },
        {
        label: "Sunday Breakfast, 3/1",
        slots: [
            { time: "8:00 AM", event: "Assorted Breakfast Items" },
        ],
        },
        {
        label: "Sunday Lunch 3/1",
        slots: [
            { time: "12:00 PM", event: "Chipotle" },
        ],
        },
        {
        label: "Sunday Afternoon, 3/1",
        slots: [
            { time: "12:00 PM", event: "Hacking Ends" },
            { time: "1:00 PM", event: "Judging" },
            { time: "3:00 PM", event: "Closing Ceremony" },
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