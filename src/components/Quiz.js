import { useEffect, useState } from "react";

const Quiz = ({setPoints, points, quizzes}) => {

    const [radioBtSelected, setRadioBtSelected] = useState({})



    let counter = 0

    const handleRadioBtChange = (event) => {
        setRadioBtSelected(JSON.parse(event.target.value))
    }

    const checkQuizAnswer = () => {
        console.log(radioBtSelected)
        console.log(radioBtSelected.correct)
        if(radioBtSelected.correct)
        {
            setPoints((prev) => prev+1)
        }
    }

    return (
        <div>
          <h1>Quiz!</h1>
              <article>
                <p>{quizzes?.title}</p>
                {quizzes?.answers?.map((answer) => 
                {
                    return (
                    <div key={answer.answerId}>
                        <input type="radio" id={answer.answer} value={JSON.stringify(answer)} name="radioQuiz" onChange={handleRadioBtChange}/>
                        <label htmlFor="radioQuiz">{answer.answer}</label>
                    </div>
                )}
                )}
              </article>
          <button onClick={checkQuizAnswer}>Check answer!</button>
        </div>
      );  
};

export default Quiz