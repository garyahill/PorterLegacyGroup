import { InvestmentPageData } from "../models";

export default function getInvestmentWithUsText(): InvestmentPageData {
	let builder: string[] = [];

	builder.push("https://script.google.com/macros/s/AKfycbxw-jmuyavrG4aq6AFt0Pp3EVXK9pbWK");
	builder.push("__wQSSytVe3Lmr_QcFazQt2l_ml3g8btPUPxQ/exec");
	const GoogleScriptsWebAppUrl = builder.join("");

	builder = [];
	builder.push("We are committed to implementing our strategy with diligence and transparency. ");
	builder.push("We look forward to partnering with investors who share our long-term vision. ");
	builder.push("Learn more about our process and how we can help you grow.");
	const InvestmentProgramText = builder.join("");

	return {
		GoogleScriptsWebAppUrl,
		InvestmentProgramText,
	};
}