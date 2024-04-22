import {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { ScoreStateContext } from "../App";
import Answer from "./Answer";


const Question = ({ question, answers, idx, page, setPage }) => {
    const { totalScore, setTotalScore } = useContext(ScoreStateContext);
    const nav = useNavigate();
    const handlePage = (score) => {
        if(page <= 9){
            page === 1 ? setTotalScore(0 + score) : setTotalScore(totalScore  + score);
            setPage(page + 1);
        }else if(page >= 10){
            setTotalScore(totalScore + score);
            nav("/loading");
            localStorage.setItem('score', totalScore + score);
        }
    }

    return (
        <div style={{display: page === idx + 1 ? 'block' : 'none'}}>
            <div>
                <p>{`${page}/10`}</p>
                <p>{question}</p>
            </div>
            <div>{answers.map((elem, vIdx) =>
                <Answer
                    {...elem}
                    handlePage={handlePage}
                    key={vIdx}
                />
            )}</div>
        </div>
)
}

export default Question;