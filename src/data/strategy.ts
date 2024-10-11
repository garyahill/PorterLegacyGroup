import { StrategyPageSection, StrategyPageData } from "../models";

export default function getStrategyPageData(): StrategyPageData {
	let builder: string[] = [];

	const PageTitle = "Our Strategy";

   	// Our Strategy
	const Sections = [] as StrategyPageSection[];

	builder = [];
	builder.push("Acquire Class B & C \"value-add\" apartment buildings in the State of Texas, preferably in the ");
	builder.push("Dallas-Fort Worth (DFW). Then, Invest in the property and its amenities through capital improvements.");
	Sections.push({
		Title: "1. Invest & Add-Value",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("After renovations and improvements, we seek to maintain or achieve 95% ");
	builder.push("occupancy and 95% market rents within 36 months.");
	Sections.push({
		Title: "2. Increase Income & Occupancy",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("During the hold period, we seek to pay investors 9% monthly preferred returns with an additional ");
	builder.push("goal of returning investor capital prior to selling. Investors will maintain their equity position ");
	builder.push("in the asset and continue to earn preferred returns until divestiture.")
	Sections.push({
		Title: "3. Pay Investor Preferred Returns & Equity",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("Once the property has been stabilized our goal is to hold for about 5 years providing income for our partners. ");
	builder.push("After the hold period the asset will be sold with investors earning double digit Internal Rate of Returns.");
	Sections.push({
		Title: "4. Operate and Divest",
		ContentText: builder.join(""),
	});

	return {
		PageTitle,
		Sections,
	} as StrategyPageData;
}