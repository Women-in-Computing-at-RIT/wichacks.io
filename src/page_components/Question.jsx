import "../style/style.css";

function Question({ question, side, onClickEvent, classic}) {
    return (
        <div className={classic} onClick={onClickEvent}>
            <h3>{question}</h3>
        </div>
    );
}

export default Question;