import React from "react";
// Types
import { AnswerObject } from "../App";
// Styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

// props 에 대한 타입을 선언 할 때에는 type 을 써도 되고, interface를 써도 됩니다.
// type Props = {
// 	question: string;
// 	answers: string[];
// 	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
// 	userAnswer: AnswerObject | undefined;
// 	questionNr: number;
// 	totalQuestions: number;
// };

interface Props {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNr: number;
	totalQuestions: number;
	children?: React.ReactNode;
}

// FIXME: step4 핵심 전달되는 Props에는 type을 지정해야 한다. 속성들 자동완성됨
// https://velog.io/@velopert/create-typescript-react-component
// React.FC 를 사용 할 때는 props 의 타입을 Generics 로 넣어서 사용
// props 에 기본적으로 children 이 들어가있다는 것
// 추가적으로, (아직까지는) React.FC를 사용하는 경우 defaultProps 가 제대로 작동하지 않습니다.
// 사용하지 않는 것을 권장
// const QuestionCard: React.FC<Props> = ({ children, question, answers, callback, userAnswer, questionNr, totalQuestions }) => (
const QuestionCard = ({ children, question, answers, callback, userAnswer, questionNr, totalQuestions }: Props) => (
	<Wrapper>
		{/* {console.log("userAnswer :>> ", userAnswer)} */}
		<p className="number">
			Question: {questionNr} / {totalQuestions}
		</p>
		<p dangerouslySetInnerHTML={{ __html: question }} />
		<div>
			{answers.map((answer) => (
				<ButtonWrapper //
					key={answer}
					correct={userAnswer?.correctAnswer === answer}
					userClicked={userAnswer?.answer === answer}
				>
					<button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
						<span dangerouslySetInnerHTML={{ __html: answer }} />
					</button>
				</ButtonWrapper>
			))}
		</div>
	</Wrapper>
);

export default QuestionCard;
