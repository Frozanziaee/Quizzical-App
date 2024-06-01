import { useState, useEffect } from "react";
import {encode} from 'html-entities'

export default function QuizItems({q, name, isResults, handleChange, myAnswers}){
    const [answerArr, setAnsewrArr] = useState([])

    useEffect(() => {
        const answers = [q.correct_answer, ...q.incorrect_answers].sort(() => Math.random() - 0.5)
        setAnsewrArr(answers)
    }, [q])

    return (
        <section className="quiz-items inter-font">
            <h3 className="question karla-font">{encode(q.question)}</h3>
            <div className="bottom-border">
            {
                answerArr.map((ans, idx) => {
                    const answerClassName = (ans === q.correct_answer) ? "correct" : "incorrect"
                    return (
                        <label className={`inter-font ${isResults ? answerClassName : ""}`}
                         key={idx}>
                            <input
                             type="radio"
                             name={name}
                             value={ans}
                             onChange={handleChange}
                             checked={myAnswers[name] === ans}
                             disabled={isResults}
                             className={answerClassName}
                            />
                            {encode(ans)}
                        </label>
                    )
                })
            }
            </div>
        </section>
    )
}