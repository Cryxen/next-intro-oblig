import { useEffect, useState } from "react";

const Quiz = ({setPoints}) => {

    const [radioBtSelected, setRadioBtSelected] = useState({})
    const [quizzes, setQuizzes] = useState([{}])

    useEffect(() => {
        const getQuizzes = async () => {
            const response = await fetch('/api/quizzes', {
                method:"get"
            })
            const result = (await response.json())
            console.log(result)
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
            setPoints((prev) => prev+1)
        }
    }

    return (
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
      );  
};

export default Quiz