import "../style/style.css";

function Question({ question, side, onClickEvent, classic}) {
    return (
        <button type="button" className={`${classic} question`} onClick={onClickEvent}>
            <h3>{question}</h3>
        </button>
    );
}

export default Question;