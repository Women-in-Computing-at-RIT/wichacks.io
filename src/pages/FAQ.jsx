import Question from "../page_components/Question";
import { useMemo, useState } from "react";
import "../style/style.css";

import book1 from "../assets/faq/book1.png";
import book2 from "../assets/faq/book2.png";
import book3 from "../assets/faq/book3.png";
import book4 from "../assets/faq/book4.png";
import book5 from "../assets/faq/book5.png";
import book6 from "../assets/faq/book6.png";

function FAQ() {
    const qa = useMemo(
        () => [
        {
            question: "Why do we do it?",
            bookImg: book1,
            answer: (
            <>
                <p>
                Historically, women and gender minorities are underrepresented in the tech world. The Women in Computing Hackathon (WiCHacks) goal is to create a safe and welcoming environment for students who identify as women or gender-minorities in the tech industry, including those of other genders or sex who support them. When we create room for others, we foster a culture of dynamic inclusion, ensuring that everyone has a seat at the table.
                </p>
            </>
            ),
        },
        {
            question: "Who can participate in Women in Computing events?",
            bookImg: book2,
            answer: (
            <>
                <p>
                Any undergraduate or graduate college student, who supports the mission of WiCHacks, can participate! As a reminder, The Women in Computing Hackathon (WiCHacks) mission is to enhance opportunities for students who identify as women or gender minorities in the tech industry and all students who support them. Please note that while the event is open to both RIT and non-RIT community members, due to the size of the hackerspace, attendance will be limited. As a result, priority for attendance will be given to RIT community members. Non-RIT community members will be asked to fill out a registration form and may be contacted for additional information.
                </p>
            </>
            ),
        },
        {
            question: "Can I still participate if I haven't been to a hackathon or a lot of coding experience?",
            bookImg: book3,
            answer: (
            <>
                <p>
                Yes! Anyone with any amount of coding experience can participate in our hackathon. We are a beginner-friendly event with support for our hackers who may not know where to start. Teams of diverse skills can be helpful in creating a successful project. Things like design and hardware can be a great addition to a team.
                </p>
            </>
            ),
        },
        {
            question: "Can I use past projects?",
            bookImg: book4,
            answer: (
            <p>
                The submission of past projects is not allowed, and will be disqualified from the Hackathon.
            </p>
            ),
        },
        {
            question: "Is the Hackathon in person or virtual? What if I don't have a group?",
            bookImg: book5,
            answer: (
            <>
                <p>The Hackathon will be in person only, at the RIT main campus. If you need a team, don't fret! We will have a team bonding session so you can find your dream team.
                </p>
            </>
            ),
        },
        {
            question: "How does judging work?",
            bookImg: book6,
            answer: (
            <p>
                Our guest judges will all follow the same rubric .. you can find it{" "}
                <a
                href={`${import.meta.env.BASE_URL}WiCHacks_2024_Judging_Rubric.xlsx_-_Sheet1.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                >
                    here!
                </a>
            </p>
            ),
        },
        ],
        []
    );

    const [selected, setSelected] = useState(qa[0]);

    return (
        <section className="faq section">
        <h2>Frequently Asked Questions</h2>

        <div className="qna">
            <div className="questions">
            {qa.map((item, idx) => (
                <Question
                key={idx}
                classic={idx % 2 === 0 ? "left question" : "right question"}
                question={item.question}
                bgImage={item.bookImg}
                onClickEvent={() => setSelected(item)}
                />
            ))}
            </div>

            <div className="answer">
            {selected?.answer ?? <p>Select a question to see the answer.</p>}
            </div>
        </div>
        </section>
    );
}

export default FAQ;