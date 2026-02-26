import "../style/style.css";
import ScheduleBlock from "../page_components/ScheduleBlock";
import { useRef, useEffect } from "react";

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
        isMeal: true,
        slots: [
            { time: "1:00 PM", event: "Wegmans Assorted Subs" },
            { time: "Salami, Capicola, Spicy Ham w/ American on Wheat" },
            { time: "Turkey w/ Swiss on White" },
            { time: "Roastbeef w/ Provolone on Wheat" },
            { time: "Ham w/ Pepper Jack on White" },
            { time: "Veggie w/ Mozzarella on White" },
            { time: "Garden or Caesar Salad", event: "(Vegan & GF)"}
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
        isMeal: true,
        slots: [
            { time: "6:00 PM", event: "Olive Garden Pasta & Breadsticks" },
            { time: "Spaghetti, Fettuccine, or Gluten Free Pasta", event: "(Vegan)"},
            { time: "Alfredo", event: "(Contains Dairy & Gluten)"},
            { time: "Meat Sauce", event: "(Contains Pork | Dairy & Gluten Free)"},
            { time: "Marinara", event: "(Vegan, Dairy & Gluten Free)"},
            { time: "Grilled Chicken", event: "(GF)"},
            { time: "Meat Balls", event: "(Contains Gluten & Dairy | Pork Free)"},
            { time: "Italian Sausage", event: "(Contains Pork | Gluten & Dairy Free)"},
            { time: "House Salad & Breadsticks"}
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
        isMeal: true,
        slots: [
            { time: "8:00 AM", event: "Assorted Breakfast Items" },
            { time: "Bagels" },
            { time: "Fruit" },
            { time: "& More!" },
        ],
        },
        {
        label: "Sunday Lunch 3/1",
        isMeal: true,
        slots: [
            { time: "12:00 PM", event: "Chipotle" },
            { time: "Chicken or Steak" },
            { time: "Sofrita", event: "(Vegan)" },
            { time: "Black or Pinto Beans" },
            { time: "White or Brown Rice" },
            { time: "Soft or Hard Shells" },
            { time: "Cheese, Lettuce, Veggies, Salsa" },
            { time: "Queso, Sour Cream, Guacamole" },
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
    const scheduleBoxesRef = useRef(null);

    useEffect(() => {
        const scheduleBoxes = scheduleBoxesRef.current;
        if (!scheduleBoxes) return;

        const handleWheel = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                scheduleBoxes.scrollLeft += e.deltaY * 3;
            }
        };

        scheduleBoxes.addEventListener('wheel', handleWheel, { passive: false });
        return () => scheduleBoxes.removeEventListener('wheel', handleWheel);
    }, []);
    return (
        <div className="schedule section">
        <div className="schedule-background">
            <h2>Schedule</h2>

            <div className="schedule-boxes" ref={scheduleBoxesRef}>
            {schedule.map((day) => (
                <ScheduleBlock
                key={day.label}
                partOfDay={day.label}
                timeSlots={day.slots}
                isMeal={day.isMeal}
                />
            ))}
            </div>
        </div>
        </div>
    );
}

export default Schedule;