import './App.css';

import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";
import LoadingTest from "./pages/LoadingTest";


export const ScoreStateContext = React.createContext();
function App() {
    const [totalScore, setTotalScore] = useState(0);

    return (
        <ScoreStateContext.Provider value={{totalScore, setTotalScore}}>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/test"} element={<Test/>}></Route>
                <Route path={"/result"} element={<Result/>}></Route>
                <Route path={"/loading"} element={<LoadingTest/>}></Route>
                {/*<Route path={"*"} element={<Error/>}></Route>*/}
            </Routes>
        </ScoreStateContext.Provider>
    );
}

export default App;
