"use client";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Quiz from "../../components/Quiz";
import Counter from "../../components/Counter";

const QuizPage = ({ Component, pageProps }) => {
  const [points, setPoints] = useState (0)
  const [quizzes, setQuizzes] = useState([{}])

  useEffect(() => {
    const getQuizzes = async () => {
        const response = await fetch('/api/quizzes', {
            method:"get"
        })
        const result = (await response.json())
        console.log(result.data)
        setQuizzes(result.data)
    }
    getQuizzes()
}, [points])

  return(
    <Layout>
      <Counter points = {points}/>
      <Quiz setPoints = {setPoints} quizzes = {quizzes} setQuizzes={setQuizzes}/>
    </Layout>
  )

}

export default QuizPage
