"use client"
import Layout from "@/components/Layout"
import { useState } from "react"


const Page = () => {

    const [questionTitle, setQuestiontitle] = useState('')
    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')

    const submitForm = (event) => {
        console.log(questionTitle)
        console.log(answer1)
        console.log(answer2)
        console.log(answer3)
        console.log(answer4)
        console.log("Submitted!")
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
                <label for="question title">Spørsmål:</label>
                <input name="question title" type="text" onChange={questionTitleInputChange} />

                <label for="question title">Feil svaralternativ 1:</label>
                <input name="question title" type="text" onChange={answer1InputChange} />

                <label for="question title">Feil svaralternativ 2:</label>
                <input name="question title" type="text" onChange={answer2InputChange} />

                <label for="question title">Feil svaralternativ 3:</label>
                <input name="question title" type="text" onChange={answer3InputChange} />

                <label for="question title">Riktig svaralternativ:</label>
                <input name="question title" type="text" onChange={answer4InputChange} />


                <button type="submit">Lag spørsmål</button>
            </form>
        </div>
        </Layout>
    )
}
export default Page