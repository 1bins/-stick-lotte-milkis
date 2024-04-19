import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const LoadingTest = () => {
    const nav = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            nav("/result")
        },2000)
    }, []);

    return(
        <>
            <p>내 내적 친밀 성향 분석중...</p>
        </>
    )
}

export default LoadingTest;