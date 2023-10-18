import { DrawQuestion } from "@/features/quizzes/DrawQuestion";
import { NextResponse } from "next/server";

export const GET = () => {
      return NextResponse.json(
        {data: DrawQuestion()},
        {status: 200}
      )
}