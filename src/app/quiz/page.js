"use client";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Quiz = ({ Component, pageProps }) => {

    const [radioBtSelected, setRadioBtSelected] = useState({})
    const [quizzes, setQuizzes] = useState([{}])

    useEffect(() => {
        const getQuizzes = async () => {
            const response = await fetch('/api/quizzes', {
                method:"get"
            })
            const result = (await response.json())

            setQuizzes(result.data)
        }
        getQuizzes()
    }, [])


    const handleRadioBtChange = (event) => {
        setRadioBtSelected(JSON.parse(event.target.value))
    }

    const checkQuizAnswer = () => {
        console.log(radioBtSelected)
        console.log(radioBtSelected.correct)
        if(radioBtSelected.correct)
        {
            alert("Hel riktig!!")
            console.log("Helt riktig!")
        }
    }

    return (
        <Layout>
        <div>
          <h1>Quiz!</h1>
          {quizzes?.map((quiz) => {
            return (
              <article key={quiz.id}>
                <p>{quiz.title}</p>
                {quiz?.answers?.map((answer) => 
                {
                    return (
                    <div key={answer.answerId}>
                        <input type="radio" id={answer.answer} value={JSON.stringify(answer)} name="radioQuiz" onChange={handleRadioBtChange}/>
                        <label htmlFor="radioQuiz">{answer.answer}</label>
                    </div>
                )}
                )}
              </article>
            );
          })}
          <button onClick={checkQuizAnswer}>Check answer!</button>
        </div>
        </Layout>
      );  
};

export default Quiz;
