import { BASE_URL } from "./constants";
import { shuffleArray } from "./utils";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const retrieveQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `${BASE_URL}?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const { results } = await (await fetch(endpoint)).json();
    return results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer
            ]),
        }
    ))
}