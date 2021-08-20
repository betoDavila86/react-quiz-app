import { BASE_URL } from "./constants";

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const retrieveQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `${BASE_URL}?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    console.log(data);
}