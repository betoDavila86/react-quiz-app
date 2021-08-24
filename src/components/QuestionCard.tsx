import { AnswerObject } from '../App'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';
 
type Props = {
    question: string;
    answers: string[];
    onSelectAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    onSelectAnswer,
    userAnswer,
    questionNumber,
    totalQuestions
}) => {
    return <Wrapper>
        <p className="number">
            {questionNumber} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => {
                return <ButtonWrapper 
                key={answer}
                correctAnswer={userAnswer?.correctAnswer === answer}
                clickedAnswer={userAnswer?.answer === answer}
                >
                    <button disabled={!!userAnswer} value={answer} onClick={onSelectAnswer}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </ButtonWrapper>
            })}
        </div>
    </Wrapper>;
}

export default QuestionCard;