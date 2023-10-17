import { NextResponse } from "next/server";

export const GET = () => {
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

      return NextResponse.json(
        {data: quizObject},
        {status: 200}
      )
}