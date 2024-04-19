const Answer = ({ answer, score, handlePage }) => {
    return (
        <button type="button" onClick={() => handlePage(score)}>{answer}</button>
    )
}

export default Answer;