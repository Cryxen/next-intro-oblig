"use client";
import { useState } from "react";

const Quiz = () => {

    const [radioBtSelected, setRadioBtSelected] = useState({})

    const handleRadioBtChange = (event) => {
        setRadioBtSelected(JSON.parse(event.target.value))
    }

    const checkQuizAnswer = () => {
        console.log(radioBtSelected)
        console.log(radioBtSelected.correct)
        if(radioBtSelected.correct)
        {
            alert("CORRECT!")
            console.log("CORRECT!")
        }
    }

  const quizObject = [
    {
      id: 1,
      title: "quiz 1",
      answers: [
        { answer: "option 1", answerId: 1 },
        { answer: "option 2", answerId: 2 },
        { answer: "option 3", answerId: 3 },
        { answer: "option 4", correct: true, answerId: 4 },
      ],
    },
    {
      id: 2,
      title: "quiz 2",
      answers: [
        { answer: "option 1", answerId: 1 },
        { answer: "option 2", answerId: 2 },
        { answer: "option 3", answerId: 3 },
        { answer: "option 4", correct: true, answerId: 4 },
      ],
    },
    {
      id: 3,
      title: "quiz 3",
      answers: [
        { answer: "option 1", answerId: 1 },
        { answer: "option 2", answerId: 2 },
        { answer: "option 3", answerId: 3 },
        { answer: "option 4", correct: true, answerId: 4 },
      ],
    },
    {
      id: 4,
      title: "quiz 4",
      answers: [
        { answer: "option 1", answerId: 1 },
        { answer: "option 2", answerId: 2 },
        { answer: "option 3", answerId: 3 },
        { answer: "option 4", correct: true, answerId: 4 },
      ],
    },
  ];
  return (
    <div>
      <h1>Quiz!</h1>
      {quizObject.map((quiz) => {
        return (
          <article key={quiz.id}>
            <p>{quiz.title}</p>
            {quiz.answers.map((answer) => 
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
  );
};

export default Quiz;
