import React, { useState } from 'react';
import { GlobalStyle, Wrapper } from './App.styles';
import QuestionCard from './components/QuestionCard';

import { retrieveQuestions } from './logic/retrieve-questions';
import { Difficulty, QuestionState } from './logic/retrieve-questions';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [isGameOver, setIsGameOver] = useState(true);

  const TOTAL_QUESTIONS = 10;

  const startTriviaHandler = async () => {
    setIsLoading(true);
    setIsGameOver(false);
    const questions = await retrieveQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setScore(0);
    setQuestionNumber(0);
    setUserAnswers([]);
    setQuestions(questions);
    setIsLoading(false);
  };

  const checkAnswerHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isGameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[questionNumber].correct_answer === answer;
      if (correct) setScore(prevState => prevState + 1);
      const answerObject = {
        question: questions[questionNumber].question,
        answer,
        correct,
        correctAnswer: questions[questionNumber].correct_answer,
      };
      setUserAnswers(prevState => [...prevState, answerObject]);
    }
  };

  const nextQuestionHandler = () => {
    if (questionNumber === TOTAL_QUESTIONS) {
      setIsGameOver(true);
      return;
    }
    setQuestionNumber(questionNumber + 1);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1 className="title">Coolest Quiz ever!</h1>
        {isGameOver || userAnswers.length === TOTAL_QUESTIONS ?
          <button className="start" onClick={startTriviaHandler}>Start</button>
          : null}
        {!isGameOver ? <p className="score">Score: {score} </p> : null}
        {isLoading && <p className="loading">Loading question...</p>}
        {!isLoading && !isGameOver &&
          <QuestionCard
            questionNumber={questionNumber + 1}
            onSelectAnswer={checkAnswerHandler}
            totalQuestions={TOTAL_QUESTIONS}
            answers={questions[questionNumber].answers}
            question={questions[questionNumber].question}
            userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
          />}
        {!isLoading &&
          !isGameOver &&
          userAnswers.length === questionNumber + 1 &&
          questionNumber !== TOTAL_QUESTIONS - 1 ?
          <button className="next" onClick={nextQuestionHandler}>Next question</button>
          : null}
      </Wrapper>
    </>
  );
}

export default App;
