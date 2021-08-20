import './App.css';
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startTriviaHandler = async () => {};
  const checkAnswerHandler = () => {};
  const nextQuestionHandler = () => {};
  return (
    <div className="container">
      <h1 className="title">Coolest Quiz ever!</h1>
      <button className="start" onClick={startTriviaHandler}>Start</button>
      <p className="score">Score</p>
      <p className="loading">Loading question...</p>
      <button className="next" onClick={nextQuestionHandler}>Next question</button>
      <QuestionCard />
    </div>
  );
}

export default App;
