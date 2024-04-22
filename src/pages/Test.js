import { useState } from "react";

import {questionList} from "../questionList";

import Question from "../components/Question";

const Test = () => {
    const [page, setPage] = useState(1);

    return(
        <div className="test-wrap">
            {questionList.map((elem, idx) =>
                <Question
                    {...elem}
                    idx={idx}
                    page={page} setPage={setPage}
                    key={idx}
                />
            )}
        </div>
    );
}

export default Test;