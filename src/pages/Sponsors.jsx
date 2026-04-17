import "../style/style.css";
import capitalone from "../assets/sponsors/capitalone.png";
import csl from "../assets/sponsors/csl.png";
import kodak from "../assets/sponsors/kodak.png";
import mandt from "../assets/sponsors/m&t.png";
import mindex from "../assets/sponsors/mindex.png";
import magic from "../assets/sponsors/magic.png";
import mlh from "../assets/sponsors/mlh.png";
import sg from "../assets/sponsors/student-gov.png";
import wegmans from "../assets/sponsors/wegmans.png";
import pure from "../assets/sponsors/pure.png";
import poppi from "../assets/sponsors/poppi.png";

const sponsors = [
    { label: "CSL", image: csl, link: "https://www.csl.com/careers/early-careers-at-csl" },
    { label: "M and T Tech", image: mandt},
    { label: "Capital One", image: capitalone, link: "https://www.capitalonecareers.com/students" },
    { label: "Kodak", image: kodak},
    { label: "Mindex", image: mindex},
    { label: "Magic Spell Studios", image: magic },
    { label: "Major League Hacking",image: mlh },
    { label: "RIT Student Government", image: sg },
    { label: "Poppi", image: poppi },
    { label: "Wegmans", image: wegmans },
    { label: "Pure", image: pure },
];

const sponsor_rows = [1, 4, 3, 3];

function chunk_sponsors(list, row_sizes) {
    let result = [];
    let index = 0;
    for (let size of row_sizes) {
        result.push(list.slice(index, index + size));
        index += size;
    }
    // in case of leftovers
    if (index < list.length) {
        result.push(list.slice(index));
    }
    return result;
}


function Sponsors() {
    const rows = chunk_sponsors(sponsors, sponsor_rows);
    return (
        <div className="sponsors-background section">
            <div className="sponsors">
                <div className="sponsors-text">
                    <h2>2026 Sponsors</h2>
                </div>
                {rows.map((row, rowIndex) => (
                    <div className="sponsors-row" key={rowIndex}>
                        {row.map((sponsor, index) => {
                            const content = (
                                <div className="sponsor-box">
                                    <img
                                        src={sponsor.image}
                                        alt={sponsor.label}
                                        className="sponsor-image"
                                    />
                                </div>
                            );

                            return sponsor.link ? (
                                <a
                                    key={index}
                                    href={sponsor.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={sponsor.label}
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={index} role="img" aria-label={sponsor.label}>
                                    {content}
                                </div>
                            );
                        })}
                    </div>
                ))}
                <div className="sponsors-text">
                    <div className="new-sponsors">
                        <p><strong>Is your company interested in sponsoring WiCHacks?</strong> &nbsp; Please email <a href="mailto:wichacks@rit.edu">wichacks@rit.edu</a> or view our <a href={`${import.meta.env.BASE_URL}2026WiCHacksSponsorshipPacket.pdf`}>2026 information packet</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sponsors;