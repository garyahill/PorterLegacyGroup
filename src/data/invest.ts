import { InvestmentPageData } from "../models";

export default function getInvestmentPageData(): InvestmentPageData {
	const builder: string[] = [];

	const PageTitle = "Invest with Us";
	const GoogleScriptsWebAppUrl = "https://script.google.com/macros/s/AKfycbxzF2sAUyVpWDC3Ozb_InGUMiJmSXppSD1_Me7fDFBvguV7eEEvX_INu9Tb7MvUHXjh/exec";

	builder.push("We are committed to implementing our strategy with diligence and transparency. ");
	builder.push("We look forward to partnering with investors who share our long-term vision. ");
	builder.push("Learn more about our process and how we can help you grow.");
	const InvestmentProgramText = builder.join("");

	return {
		PageTitle,
		GoogleScriptsWebAppUrl,
		InvestmentProgramText,
	};
}