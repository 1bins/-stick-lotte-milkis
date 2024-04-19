import { useNavigate } from "react-router-dom";

const Home = () => {
    const nav = useNavigate();

    return(
        <>
            <button type="button" onClick={() => {nav("/test")}}>테스트 페이지로 이동</button>
        </>
    );
}

export default Home;