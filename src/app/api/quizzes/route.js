import { DrawQuestion } from "@/features/quizzes/DrawQuestion";
import { QuizObject } from "@/features/quizzes/QuizObject";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ data: DrawQuestion() }, { status: 200 });
};

export const POST = async (req) => {
  //https://stackoverflow.com/a/66740097

   console.log(req)
   console.log(req.body)

   const data = await req.json()
   console.log(data)
   console.log(QuizObject.push(data))
   console.log("All Quiz objects: ")
   console.log(QuizObject)
  return NextResponse.json(data,{ status: 201 });
};
