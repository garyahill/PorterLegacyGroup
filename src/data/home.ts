import { HomePageData, HomePageSection } from "../models";

export default function getHomePageData(): HomePageData {
	let builder: string[] = [];

	// Tagline
	builder.push("Porter Legacy is a private, multifamily (MF) real estate investment firm focused on workforce housing in ");
	builder.push("the Dallas-Fort Worth (DFW) area and the State of Texas. We provide carefully curated investment opportunities ");
	builder.push("that offer risk-adjusted, monthly cash flow and capital appreciation with significant tax-advantages for individual ");
	builder.push("accredited and institutional investors.");
	const Tagline = builder.join("");

	// Mission
	builder = [];
	builder.push("Our mission is to excel in the acquisition, renovation, lease, and divestiture of multifamily properties, ");
	builder.push("ensuring consistent returns for investors and building strong relationships with partners in the communities in which we operate.");
	const Mission = builder.join("");

	// Why Invest with Us
	const WhyInvestWithUs = {
		Title: "Why Invest with Us in Multi-Family Real Estate",
		Sections: [] as HomePageSection[],
	};

	builder = [];
	builder.push("Now is an ideal time to acquire multifamily assets in DFW and Texas due to rising construction costs, increasing rental demand, and lower valuations (down 30%) caused by higher ");
	builder.push("interest rates and a surge in new units. Population growth is absorbing new units quickly, and once the supply surge ends in Q4 2025, both valuations and rental income are expected to rise significantly.");
	WhyInvestWithUs.Sections.push({
		Title: "MultiFamily",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("DFW is the 4th fastest-growing metro area in the US, with 418 new residents daily. Low unemployment, high job growth, and a young population favoring renting make it attractive. Texas is also landlord-friendly. ");
	builder.push("Key industries are technology, finance, healthcare, and transportation, with major companies like AT&T, ExxonMobil, and American Airlines. Economic and population growth is expected to continue.");
	WhyInvestWithUs.Sections.push({
		Title: "DFW Market",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("High-demand rental units in multifamily properties provide steady cash flow, as a few vacancies have minimal impact. Economies of scale offer cost efficiency and enable professional management, making it easier for ");
	builder.push("investors to receive consistent monthly income without directly handling property management or tenant issues.");
	WhyInvestWithUs.Sections.push({
		Title: "Passive Income",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("Improving multifamily properties through renovations or added amenities boosts investor equity by raising rental income and paying down debt. Multifamily real estate typically offers higher risk-adjusted returns (12-18%) ");
	builder.push("than the S&P 500 (8-9%), with less volatility and lower correlation to the stock market.");
	WhyInvestWithUs.Sections.push({
		Title: "Capital Appreciation",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("Real estate investments offer tax advantages through depreciation, which reduces taxable income. ");
	builder.push("Deductible expenses like mortgage interest, maintenance, and management fees increase net income, benefiting investors with higher monthly returns.");
	WhyInvestWithUs.Sections.push({
		Title: "Tax Advantages",
		ContentText: builder.join(""),
	});

    	// Our Strategy
	const Strategy = {
		Title: "Our Strategy",
		Sections: [] as HomePageSection[],
	};

	builder = [];
	builder.push("Acquire Class B & C \"value-add\" apartment buildings in the State of Texas, preferably in the Dallas-Fort Worth (DFW). ");
	builder.push("Then, Invest in the property and its amenities through capital improvements.");
	Strategy.Sections.push({
		Title: "Invest & Add-Value",
		ContentText: builder.join(""),
	});

	Strategy.Sections.push({
		Title: "Increase Income & Occupancy",
		ContentText: "After renovations and improvements, we seek to maintain or achieve 95% occupancy and 95% market rents within 36 months.",
	});

	builder = [];
	builder.push("During the hold period, we seek to pay investors 9% monthly preferred returns with an additional goal of returning investor capital prior to selling. ");
	builder.push("Investors will maintain their equity position in the asset and continue to earn preferred returns until divestiture.");
	Strategy.Sections.push({
		Title: "Pay Investor Preferred Returns & Equity",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("Once the property has been stabilized our goal is to hold for about 5 years providing income for our partners. ");
	builder.push("After the hold period the asset will be sold with investors earning double digit Internal Rate of Returns.");
	Strategy.Sections.push({
		Title: "Operate and Divest",
		ContentText: builder.join(""),
	});

	return {
		Tagline,
		Mission,
		WhyInvestWithUs,
		Strategy,
	} as HomePageData;
}