"use client";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";

const QuizPage = ({ Component, pageProps }) => {

  return(
    <Layout>
      <Quiz />
    </Layout>
  )

}

export default QuizPage
