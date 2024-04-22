import {useContext, useEffect} from "react";
import { ScoreStateContext } from '../App';
import { productList } from "../productList";

const Result = () => {
    const { totalScore, setTotalScore } = useContext(ScoreStateContext)

    useEffect(() => {
        const scoreData = localStorage.getItem('score');
        if(scoreData){
            setTotalScore(scoreData);
        }
    }, [setTotalScore]);

    const getMilkis = (score) => {
        if(score <= 22) return productList[0]
        else if(score >= 23 && score <= 37) return productList[1]
        else if(score >= 38) return productList[2]
    }

    return(
        <div>
            <p>총 점수는 <b>{totalScore}</b></p>
            <p>{getMilkis(totalScore).name}</p>
            <p>{getMilkis(totalScore).title}</p>
            <p>{getMilkis(totalScore).content}</p>
        </div>
    )
}

export default Result;