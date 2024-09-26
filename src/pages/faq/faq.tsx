import React from "react";
import GetFaqData from "../../data/faq";
import "./faq.less";
import FaqList from "./components/faqList";

const FAQ: React.FC = () => {

	const faqs = GetFaqData();

	return (
		<div className="faq-container">
			<div className="faq-list">
				<h1>{ faqs.PageTitle}</h1>
				<FaqList faqs={faqs.Questions} />
			</div>
		</div>
	);
};

export default FAQ;