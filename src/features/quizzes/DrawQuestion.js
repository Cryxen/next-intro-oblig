const { QuizObject } = require("./QuizObject");

let questionNumber = 0


export const DrawQuestion = () => {
  const quizObject = QuizObject;
  if (questionNumber >= quizObject.length -1) {
    questionNumber = 0
  }
  else
    questionNumber ++
  return quizObject[questionNumber]
};
