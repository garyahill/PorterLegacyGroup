import { Question } from "../models";

function GetFaqData(): ReadonlyArray<Question> {
	return [
		{
		  "Question": "What is Porter Legacy Group and what do you invest in?",
		  "Answer": `Porter Legacy Group is a Private Equity Firm that focuses on acquiring commercial real estate properties.
		  We target high-quality assets with strong growth potential, aiming to generate consistent returns for our investors.`,
		},
		{
		  "Question": "How does Porter Legacy Group generate returns for investors?",
		  "Answer": `We generate returns through a combination of rental income, property appreciation, expertly timed sales. Through 
		  careful professional property management and capital improvements to the properties, we aim to maximize profits and return them to
		  our investors.`,
		},
		{
		  "Question": "Who can invest with Porter Legacy Group?",
		  "Answer": `Porter Legacy Group is open to accredited investors, as defined by the SEC. 
		  This typically includes individuals or entities who meet certain financial thresholds in income or net worth.`,
		},
		{
		  "Question": "What is the typical holding period for an investment?",
		  "Answer": `Our typical holding period for Commercial Real Estate Investments ranges from 3 to 7 years. 
		  This allows us to capitalize on market conditions and maximize returns before executing an exit strategy.`,
		},
		{
		  "Question": "What are the risks involved with investing in commercial real estate?",
		  "Answer": `As with any investment, Commercial Real Estate carries risks, including market fluctuations, 
		  tenant vacancies, and changes in interest rates. However, our experience and due diligence help mitigate these risks.`,
		},
		{
		  "Question": "How often will I receive updates about my investment?",
		  "Answer": `Investors receive regular updates, including monthly reports that detail property performance, financials, 
		  and market conditions. We also provide timely updates on major events, such as property sales or acquisitions.`,
		},
		{
		  "Question": "When can I expect to receive returns on my investment?",
		  "Answer": `Investors typically receive distributions on a monthly basis, depending on the cash flow generated by 
		  the properties. Final returns are distributed upon the sale of the property, which is part of the exit strategy.`,
		},
		{
		  "Question": "Can I reinvest my returns?",
		  "Answer": "Yes, we offer the option for Investors to reinvest their returns into future investment opportunities with Porter Legacy Group.",
		},
		{
		  "Question": "How do I get started with investing?",
		  "Answer": `To get started, please visit our 'Invest with Us' page and fill out the contact form. Our team will reach out 
		  to guide you through the process and discuss available opportunities.`,
		},
		{
		  "Question": "What happens if I want to exit my investment early?",
		  "Answer": `Real Estate Investments with Porter Legacy Group are typically long-term and illiquid, meaning early exits are 
		  uncommon. However, in certain circumstances, we may be able to accommodate early exit requests depending on the terms of the agreement.`,
		},
	  ];
}

export default GetFaqData;