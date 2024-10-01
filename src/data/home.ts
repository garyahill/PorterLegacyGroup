import { HomePageData, HomePageSection } from "../models";

export default function getHomePageData(): HomePageData {
	let builder: string[] = [];

	// Why Invest with Us
	const WhyInvestWithUs = {
		Title: "Why Invest with Us?",
		Sections: [] as HomePageSection[],
	};

	builder = [];
	builder.push("Now is an ideal time to acquire multifamily assets in DFW and Texas due to rising construction costs<span class='special-character'>,</span> increasing rental ");
	builder.push("demand<span class='special-character'>,</span> and lower valuations (down 30<span class='special-character'>%</span>) caused by higher interest rates and a surge ");
	builder.push("in new units. Population growth is absorbing new units quickly<span class='special-character'>,</span> and once the supply surge ends in Q4 ");
	builder.push("2025<span class='special-character'>,</span> both valuations and rental income are expected to rise significantly.");
	WhyInvestWithUs.Sections.push({
		Title: "MultiFamily",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("DFW is the 4th fastest-growing metro area in the US<span class='special-character'>,</span> with 418 new residents daily. Low unemployment<span class='special-character'>,</span> ");
	builder.push("high job growth<span class='special-character'>,</span> and a young population favoring renting make it attractive. Texas is also landlord-friendly. Key industries are ");
	builder.push("technology<span class='special-character'>,</span> finance<span class='special-character'>,</span> healthcare<span class='special-character'>,</span> and ");
	builder.push("transportation<span class='special-character'>,</span> with major companies like AT&T<span class='special-character'>,</span> ExxonMobil<span class='special-character'>,</span> ");
	builder.push("and American Airlines. Economic and population growth is expected to continue.");
	WhyInvestWithUs.Sections.push({
		Title: "DFW Market",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("High-demand rental units in multifamily properties provide steady cash flow<span class='special-character'>,</span> as a few vacancies have minimal impact. Economies of scale offer cost ");
	builder.push("efficiency and enable professional management<span class='special-character'>,</span> making it easier for investors to receive consistent monthly income without directly handling property management or tenant issues.");
	WhyInvestWithUs.Sections.push({
		Title: "Passive Income",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("Improving multifamily properties through renovations or added amenities boosts investor equity by raising rental income and paying down debt. Multifamily real estate typically offers higher risk-adjusted returns ");
	builder.push("(12-18<span class='special-character'>%</span>) than the S&P 500 (8-9<span class='special-character'>%</span>)<span class='special-character'>,</span> with less volatility and lower correlation to the stock market.");
	WhyInvestWithUs.Sections.push({
		Title: "Capital Appreciation",
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("Real estate investments offer tax advantages through depreciation<span class='special-character'>,</span> which reduces taxable income. ");
	builder.push("Deductible expenses like mortgage interest<span class='special-character'>,</span> maintenance<span class='special-character'>,</span> and ");
	builder.push("management fees increase net income<span class='special-character'>,</span> benefiting investors with higher monthly returns.");
	WhyInvestWithUs.Sections.push({
		Title: "Tax Advantages",
		ContentText: builder.join(""),
	});

	return {
		WhyInvestWithUs,
	} as HomePageData;
}