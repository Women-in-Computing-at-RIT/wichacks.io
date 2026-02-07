import Question from "../page_components/Question";
import { useState } from 'react';
import "../style/style.css";

function FAQ() {
    const qa = [{ question: "Why do we do it?", answer: "Historically, women and gender minorities are underrepresented in the tech world. The Women in Computing Hackathon (WiCHacks) goal is to create a safe and welcoming environment for students who identify as women or gender-minorities in the tech industry, including those of other genders or sex who support them. When we create room for others, we foster a culture of dynamic inclusion, ensuring that everyone has a seat at the table."}, 
        { question: "Who can participate in Women in Computing events?", answer: "Any undergraduate or graduate college student, who supports the mission of WiCHacks can participate! As a reminder, The Women in Computing Hackathon (WiCHacks) mission is to enhance opportunities for students who identify as women or gender minorities in the tech industry and all students who support them. Please note that while the event is open to both RIT and non-RIT community members, due to the size of the hackerspace, attendance will be limited. As a result, priority for attendance will be given to RIT community members. Non-RIT community members will be asked to fill out a registration form and may be contacted for additional information.", answer2: "Please note that while the event is open to both RIT and non-RIT community members, due to the size of the hackerspace, attendance will be limited. As a result, priority for attendance will be given to RIT community members. Non-RIT community members will be asked to fill out a registration form and may be contacted for additional information."},
        { question: "Can I still participate if I haven't been to a hackathon or a lot of coding experience?", answer: "Yes! Anyone with any amount of coding experience can participate in our hackathon. We are a beginner-friendly event with support for our hackers who may not know where to start. Teams of diverse skills can be helpful in creating a successful project. Things like design and hardware can be a great addition to a team."},
        { question: "Can I use past projects?", answer: "The submission of past projects is not allowed, and will be disqualified from the Hackathon."},
        { question: "Is the Hackathon in person or virtual? What if I don't have a group?", answer: "The Hackathon will be in person only, at the RIT main campus. If you need a team, don't fret! We will have a team bonding session so you can find your dream team."},
        { question: "How does judging work?", answer: "Our guest judges will all follow the same rubric, you can find it ", linktext: "here!", link: "https://wichacks.io/assets/media/WiCHacks_2024_Judging_Rubric.xlsx_-_Sheet1.pdf"}, // add link
    ];
    const [selected, setSelected] = useState(null);   


    return (
        <section className ="faq section">
            <h2>Frequently Asked Questions</h2>
            <div className="qna">
                <div className="questions">
                    {qa.map((item, idx) => (
                        <Question key={idx} classic={idx % 2 === 0 ? 'left' : 'right'} question={item.question} onClickEvent={() => setSelected(item)}/>
                    ))}
                </div>
                <div className="answer">
                    <textarea tabIndex="-1" value={selected?.answer ?? ""} readOnly></textarea>
                    {selected?.link ? (
                        <a href={selected.link} target="_blank" rel="noopener noreferrer">
                            {selected.linktext}
                        </a>
                    ) : null}
                </div>
            </div>
        </section>
    );
}

export default FAQ;