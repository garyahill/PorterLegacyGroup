import * as React from "react";
import { Question } from "../../../models";
import "./faq-item.less";

interface FaqItemProps {
	Question: Question;
	Index: number;
	Open: boolean;
	OnClick: () => void;
}

const FaqItem = (props: FaqItemProps) => {
	const { Question, Index, Open, OnClick } = props;
	return (
		<>
			<div key={`Key_Faq_Item_${Index}`} className="faq-item" >
				<h2>{Question.Question}</h2>
				<div className={`icon ${Open ? "open" : ""}`} onClick={ OnClick }></div>
			</div>
			<div
				key={`Key_Answer_${Index}`}
				className={`answer ${Open ? "open" : ""}`}
				dangerouslySetInnerHTML={{ __html: Question.Answer }}>
			</div>
		</>
	);
};

export default FaqItem;