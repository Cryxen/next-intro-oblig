import { QuizObject } from "@/features/quizzes/QuizObject";
import { NextResponse } from "next/server";

//Denne er kun her for å tilfredstille oppgavekrav. 
export const GET = () => {
    return NextResponse.json({ data: QuizObject }, { status: 200 });
  };