function Question({ question, classic, onClickEvent, bgImage }) {
    return (
        <button type="button" className={classic} onClick={onClickEvent}>
        <img src={bgImage} alt="" className="book-slice" />
        <h3><span className="qtext">{question}</span></h3>
        </button>
    );
}

export default Question;