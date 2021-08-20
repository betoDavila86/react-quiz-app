
type Props = {
    question: string;
    answers: string[];
    onSelectAnswer: any;
    userAnswer: any;
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
                return <div>
                    <button disabled={userAnswer} onClick={onSelectAnswer}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </div>
            })}
        </div>
    </div>;
}

export default QuestionCard;