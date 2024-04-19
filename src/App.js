import './App.css';

import {useState} from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";
function App() {
    const [totalScore, setTotalScore] = useState(0);

    return (
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/test"} element={<Test totalScore={totalScore} setTotalScore={setTotalScore}/>}></Route>
            <Route path={"/result"} element={<Result totalScore={totalScore}/>}></Route>
            {/*<Route path={"*"} element={<Error/>}></Route>*/}
        </Routes>
    );
}

export default App;
