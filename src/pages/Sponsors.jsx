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
    { image: csl, link: "https://www.csl.com/careers/early-careers-at-csl" },
    { image: mandt},
    { image: capitalone, link: "https://www.capitalonecareers.com/students" },
    { image: kodak},
    { image: mindex},
    { image: magic },
    { image: mlh },
    { image: sg },
    { image: poppi },
    { image: wegmans },
    { image: pure },
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
                    <h2>Sponsors</h2>
                </div>
                {rows.map((row, rowIndex) => (
                    <div className="sponsors-row" key={rowIndex}>
                        {row.map((sponsor, index) => {
                            const content = (
                                <div className="sponsor-box">
                                    <img
                                        src={sponsor.image}
                                        alt={`sponsor-${rowIndex}-${index}`}
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
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={index}>{content}</div>
                            );
                        })}
                    </div>
                ))}
                <div className="sponsors-text">
                    <div className="new-sponsors">
                        <p><strong>Is your company interested in sponsoring WiCHacks?</strong> &nbsp; Please email <a href="mailto:wichacks@rit.edu">wichacks@rit.edu</a> or view our <a href="https://wichacks.io/assets/documents/2026WiCHacksSponsorshipPacket.pdf">2026 information packet</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sponsors;