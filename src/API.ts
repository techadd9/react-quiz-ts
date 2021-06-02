import { shuffleArray } from './utils';

// FIXME: step3 google search trivia api
// https://opentdb.com/api_config.php

// api 응답 데이터 확인 후 타입 지정
export type Question = {
  category: string;
  correct_answer: string; //정답
  difficulty: string;
  incorrect_answers: string[]; //오답
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

// 응답데이터에 정답+오답을 합친 answers을 합친 타입
export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  
  // await 2번 쓴 이유 : fetch를 await, json 변환을 await
  const data = await (await fetch(endpoint)).json();
  // const data = await fetch(endpoint).then(function(response) {
  //   return response.json();
  // }); 
  // console.log(`data`, data)

  // 응답데이터에 정답+오답을 합친 answers을 합침
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
};
