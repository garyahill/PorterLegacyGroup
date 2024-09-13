import React from "react";
import GetFaqData from "../../data/faqData";
import "./faq.less";
import FaqList from "./components/faqList";

const FAQ: React.FC = () => {

	const faqs = GetFaqData();

	return (
		<div className="faq-container">
			<div className="faq-list">
				<h1>Investor Frequently Asked Questions</h1>
				<FaqList faqs={faqs} />
			</div>
		</div>
	);
};

export default FAQ;