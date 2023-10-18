"use client"
import Layout from "@/components/Layout"
import axios from "axios"
import { useState } from "react"


const Page = () => {

    const [questionTitle, setQuestiontitle] = useState('')
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')

    const submitForm = (event) => {

        console.log("Submitted!")

        //API POST
        const questionObject = {
                title: questionTitle,
                answers: [
                  { answer: answer1, answerId: 1 },
                  { answer: answer2, answerId: 2 },
                  { answer: answer3, answerId: 3 },
                  { answer: answer4, correct: true, answerId: 4 },
                ],
              }
       console.log(JSON.stringify(questionObject))
       //Får ikke til async await av en eller annen grunn.
        axios.post('/api/quizzes', JSON.stringify(questionObject))
              .then((response) => {
                console.log(response)
              })
              .catch((error) => {
                console.log(error)
              })
        event.preventDefault()
    }

    const questionTitleInputChange = (event) => {
        setQuestiontitle(event.target.value)
    }
    const answer1InputChange = (event) => {
        setAnswer1(event.target.value)
    }
    const answer2InputChange = (event) => {
        setAnswer2(event.target.value)
    }
    const answer3InputChange = (event) => {
        setAnswer3(event.target.value)
    }
    const answer4InputChange = (event) => {
        setAnswer4(event.target.value)
    }

    return(
        <Layout>
        <div className="MakeQuestion">
            <form onSubmit={submitForm}>
                <label htmlFor="question title">Spørsmål:</label>
                <input name="question title" type="text" onChange={questionTitleInputChange} />

                <label htmlFor="question title">Feil svaralternativ 1:</label>
                <input name="question title" type="text" onChange={answer1InputChange} />

                <label htmlFor="question title">Feil svaralternativ 2:</label>
                <input name="question title" type="text" onChange={answer2InputChange} />

                <label htmlFor="question title">Feil svaralternativ 3:</label>
                <input name="question title" type="text" onChange={answer3InputChange} />

                <label htmlFor="question title">Riktig svaralternativ:</label>
                <input name="question title" type="text" onChange={answer4InputChange} />


                <button type="submit">Lag spørsmål</button>
            </form>
        </div>
        </Layout>
    )
}
export default Page