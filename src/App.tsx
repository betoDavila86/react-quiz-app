import { useState } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';

import { retrieveQuestions } from './logic/retrieve-questions';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const TOTAL_QUESTIONS = 10;

  const startTriviaHandler = async () => { retrieveQuestions(TOTAL_QUESTIONS, difficulty) };
  const checkAnswerHandler = () => { };
  const nextQuestionHandler = () => { };
  return (
    <div className="container">
      <h1 className="title">Coolest Quiz ever!</h1>
      <button className="start" onClick={startTriviaHandler}>Start</button>
      <p className="score">Score: {score} </p>
      {isLoading && <p className="loading">Loading question...</p>}
      <button className="next" onClick={nextQuestionHandler}>Next question</button>
      <QuestionCard
        questionNumber={questionNumber + 1}
        onSelectAnswer={checkAnswerHandler}
        totalQuestions={TOTAL_QUESTIONS}
        answers={questions[questionNumber].answers}
        question={questions[questionNumber].question}
        userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
      />
    </div>
  );
}

export default App;
