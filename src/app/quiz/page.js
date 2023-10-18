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

    /*
      Denne er med for å tilfredstille oppgave krav. Originalt sett hadde jeg ikke ønske om å ha den med.
    */
    const getAllQuizzes = async () => {
      const resopnse = await fetch('/api/fetchallquizzes', {
        method:"get"
      })
      const result = ( await resopnse.json())
      console.log(result.data)
    }
    getQuizzes()
    getAllQuizzes()
}, [points])

  return(
    <Layout>
      <Counter points = {points}/>
      <Quiz setPoints = {setPoints} quizzes = {quizzes} setQuizzes={setQuizzes}/>
    </Layout>
  )

}

export default QuizPage
