import Button from "./Button"
import QuizItems from "./QuizItems"
import { useState, useEffect } from "react"

export default function Question(){
    const [quiz, setQuiz] = useState([])
    const [myAnswers, setMyAnswers] = useState({})
    const [showResults, setShowResults] = useState(false)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [startAgain, setStartAgain] = useState(false)

        useEffect(() => {
            fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy")
                .then(res => res.json())
                .then(data => setQuiz(data.results))
        }, [startAgain])

        function handleChange(e){
            const {name, value} = e.target
            setMyAnswers(prevAnswer => ({
                ...prevAnswer,
                [name]: value,
            }))
        }

        function handleSubmit(e){
            e.preventDefault()
            checkAnswers()
        }

        function checkAnswers(){
            if(Object.keys(myAnswers).length === quiz.length){
                let correctAnswered = 0

                quiz.forEach((question, index) => {
                    const answer = question.correct_answer
                    const myAns = myAnswers[`q${index + 1}`]
                    if(myAns === answer){
                        correctAnswered++
                    }
                })
                setCorrectAnswers(correctAnswered)
                setShowResults(true)
            }
        }

        function handleStartAgain (){
            setMyAnswers({})
            setShowResults(false)
            setCorrectAnswers(0)
            setStartAgain(prevStart => !prevStart)
        }

        const questionArray = quiz.map((item, index) => (
            <QuizItems
                q={item}
                key={index}
                name={`q${index + 1}`}
                handleChange={handleChange}
                isResults={showResults}
                myAnswers={myAnswers} // Pass the current answers
            />
        ))

    return(
        <section className="section-question">
                <form onSubmit={handleSubmit}>
                {questionArray}      
                    <div className="results">
                        {
                            showResults ? 
                                <div className="score-result">
                                    <h2 className="score inter-font">You Scored {correctAnswers}/{quiz.length} correct answer</h2>
                                    <Button onClick={handleStartAgain}>Start Again</Button>
                                </div>
                                :
                                <div className="center">
                                    <Button>Check answers</Button>
                                </div>
                        }
                    </div>
                </form>
            
        </section>
    )
}