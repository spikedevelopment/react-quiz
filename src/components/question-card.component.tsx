import { FC } from 'react'

// https://opentdb.com/api.php?amount=10&type=multiple

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: boolean;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: FC<Props> =  ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions}) => (
        <div>
            <p className="number">
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <div>
                {answers.map(answer => (
                    <div>
                        <button disabled={userAnswer}
                            onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer}}></span>
                        </button>
                    </div>
                ))}
            </div> 
        </div>
    )

export default QuestionCard