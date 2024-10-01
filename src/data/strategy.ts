import { StrategyPageSection, StrategyPageData } from "../models";

export default function getStrategyPageData(): StrategyPageData {
	let builder: string[] = [];

	const PageTitle = "Our Strategy";

   	// Our Strategy
	const Sections = [] as StrategyPageSection[];

	builder = [];
	builder.push("Acquire Class B & C \"value-add\" apartment buildings in the State of Texas<span class='special-character'>,</span> preferably in the Dallas-Fort Worth (DFW). ");
	builder.push("Then<span class='special-character'>,</span> Invest in the property and its amenities through capital improvements.");
	Sections.push({
		Title: "1. Invest & Add-Value",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("After renovations and improvements<span class='special-character'>,</span> we seek to maintain or achieve 95<span class='special-character'>%</span> ");
	builder.push("occupancy and 95<span class='special-character'>%</span> market rents within 36 months.");
	Sections.push({
		Title: "2. Increase Income & Occupancy",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("During the hold period<span class='special-character'>,</span> we seek to pay investors 9<span class='special-character'>%</span> monthly preferred returns with an additional goal of returning investor capital prior to selling. ");
	builder.push("Investors will maintain their equity position in the asset and continue to earn preferred returns until divestiture.");
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