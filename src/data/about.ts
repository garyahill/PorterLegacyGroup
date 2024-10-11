import { AboutPageData, TeamMemberSection, ValuesItem } from "../models";

export default function getAboutPageData(): AboutPageData {
	let builder: string[] = [];

	// Values Area
	const valuesAreaTitle = "Values";
	const valuesSummaryItems = [] as string[];
	const valuesItems = [] as ValuesItem[];

	// Values Summary Paragraphs
	builder = [];
	builder.push("Ryan is a huge believer in the Amazon Leadership Principles that have propelled the growth and success of many Amazon businesses. ");
	builder.push("All 14 leadership principles can be seen <a href='https://www.amazon.jobs/content/en/our-workplace/leadership-principles' target='_blank' rel='noopener noreferrer'>here</a>.");
	valuesSummaryItems.push(builder.join(""));

	builder = [];
	builder.push("The following 8 values are a focus for Porter Legacy Group and all day-to-day work is guided by these values.");
	valuesSummaryItems.push(builder.join(""));

	// Values Items
	builder = [];
	builder.push("\"Prioritize and obsess over customer needs and satisfaction above all else.\"");
	valuesItems.push({
		SectionTitle: "Customer Obsession",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("\"Meet established objectives by delivering high-quality products or services in a timely and consistent manner.\"");
	valuesItems.push({
		SectionTitle: "Deliver Results",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("\"Build solid relationships based on transparency, honesty and mutual respect.\"");
	valuesItems.push({
		SectionTitle: "Earn Trust",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("\"Maximize available resources and find efficient ways to achieve results without overspending.\"");
	valuesItems.push({
		SectionTitle: "Frugality",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("\"Prioritize quick decision-making and action over procrastination and over-analysis.\"");
	valuesItems.push({
		SectionTitle: "Bias for Action",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("\"Have a bold and ambitious vision that inspires meaningful actions and results.\"");
	valuesItems.push({
		SectionTitle: "Think Big",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("\"Set exceptional quality standards and demand their fulfillment in all areas of work.\"");
	valuesItems.push({
		SectionTitle: "Insist on the Highest Standards",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("\"Maintain a mindset of constant learning and always be open to new ideas and perspectives.\"");
	valuesItems.push({
		SectionTitle: "Learn and Be Curious",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("\"Encourage innovation and creativity, and seek ways to simplify processes and solutions.\"");
	valuesItems.push({
		SectionTitle: "Invent and Simplify",
		SectionText: builder.join(""),
	});


	// Area Title
	const teamAreaTitle = "About";
	const teamSections = [] as TeamMemberSection[];

	// Ryan Porter - Info
	builder = [];
	builder.push("Ryan is a Principal Consultant with Amazon Web Services (AWS) where he advises Technology Executives of utilities and publicly ");
	builder.push("traded companies on how to migrate and modernize their infrastructure to the Amazon cloud. Ryan has 25 years of consulting and ");
	builder.push("technology experience in the San Francisco Bay Area.");
	teamSections.push({
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("Ryan grew up in the Real Estate & Investment Industries with his father, <a href='https://www.linkedin.com/in/bruce-a-porter-1b841a5' ");
	builder.push("target='_blank' rel='noopener noreferrer'>Bruce A. Porter</a> (RE Broker, Retail Investment Advisor & former owner of a Broker Dealer) ");
	builder.push("and uncles including Davis R. Chant (owner of <a href='https://www.chantre.com/' target='_blank' rel='noopener noreferrer'>Davis R. Chant ");
	builder.push("Realtors</a> in the Poconos) on both coasts.");
	teamSections.push({
		ContentText: builder.join(""),
	});

	builder = [];
	builder.push("Ryan began his real estate journey remodeling, renting and flipping apartments in California and Latin America for 10 years. ");
	builder.push("Over the years Ryan's passion for Real Estate has deepened and he views multifamily as one of the top opportunities to generate ");
	builder.push("wealth and secure solid risk-adjusted returns.");
	teamSections.push({
		ContentText: builder.join(""),
	});

	return {
		ValuesData: {
			ValuesTitle: valuesAreaTitle,
			ValuesSummaryItems: valuesSummaryItems,
			ValuesItems: valuesItems,
		},
		TeamData: {
			TeamTitle: teamAreaTitle,
			MemberName: "Ryan B. Porter",
			MemberLinkedIn: "https://www.linkedin.com/in/ryanbporter/",
			TeamMemberSections: teamSections as ReadonlyArray<TeamMemberSection>,
		},
	} as AboutPageData;
}

