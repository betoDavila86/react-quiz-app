import { AnswerObject } from '../App'

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
    return <div>
        <p className="number">
            {questionNumber} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => {
                return <div key={answer}>
                    <button disabled={!!userAnswer} value={answer} onClick={onSelectAnswer}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            })}
        </div>
    </div>;
}

export default QuestionCard;