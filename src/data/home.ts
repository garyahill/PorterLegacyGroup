import { HomePageData, HomePageSection } from "../models";

export default function getHomePageData(): HomePageData {
	let builder: string[] = [];

	// Why Invest with Us
	const WhyInvestWithUs = {
		Title: "Why Invest with Us?",
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

	return {
		WhyInvestWithUs,
	} as HomePageData;
}