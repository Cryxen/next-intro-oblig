"use client";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";
import Counter from "../components/Counter";

const QuizPage = ({ Component, pageProps }) => {
  const [points, setPoints] = useState (0)

  return(
    <Layout>
      <Counter points = {points}/>
      <Quiz setPoints = {setPoints}/>
    </Layout>
  )

}

export default QuizPage
