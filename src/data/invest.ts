import { InvestmentPageData } from "../models";

export default function getInvestmentWithUsText(): InvestmentPageData {
	const builder: string[] = [];

	const GoogleScriptsWebAppUrl = "https://script.google.com/macros/s/AKfycby9TXFCuWJ4WpnjUeN2Gh8_3RYIuTdkJxCC24QIJSWDyY01G7tjASCrinxVtmkcC0Qg/exec";

	builder.push("We are committed to implementing our strategy with diligence and transparency. ");
	builder.push("We look forward to partnering with investors who share our long-term vision. ");
	builder.push("Learn more about our process and how we can help you grow.");
	const InvestmentProgramText = builder.join("");

	return {
		GoogleScriptsWebAppUrl,
		InvestmentProgramText,
	};
}