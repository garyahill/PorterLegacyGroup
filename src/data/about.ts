import { AboutPageData, TeamItem, ValuesItem } from "../models";

export default function getAboutPageData(): AboutPageData {
	let builder: string[] = [];

	// Values Area
	const valuesAreaTitle = "Our Values";
	const valuesItems = [] as ValuesItem[];

	builder = [];
	builder.push("<span class='special-character'>\"</span>Prioritize and obsess over customer needs and satisfaction above all else.<span class='special-character'>\"</span>");
	valuesItems.push({
		SectionTitle: "Customer Obsession",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("<span class='special-character'>\"</span>Meet established objectives by delivering high-quality products or services in a timely and consistent manner.<span class='special-character'>\"</span>");
	valuesItems.push({
		SectionTitle: "Deliver Results",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("<span class='special-character'>\"</span>Build solid relationships based on transparency<span class='special-character'>,</span> honesty and mutual respect.<span class='special-character'>\"</span>");
	valuesItems.push({
		SectionTitle: "Earn Trust",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("<span class='special-character'>\"</span>Maximize available resources and find efficient ways to achieve results without overspending.<span class='special-character'>\"</span>");
	valuesItems.push({
		SectionTitle: "Frugality",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("<span class='special-character'>\"</span>Prioritize quick decision-making and action over procrastination and over-analysis.<span class='special-character'>\"</span>");
	valuesItems.push({
		SectionTitle: "Bias for Action",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("<span class='special-character'>\"</span>Have a bold and ambitious vision that inspires meaningful actions and results.<span class='special-character'>\"</span>");
	valuesItems.push({
		SectionTitle: "Think Big",
		SectionText: builder.join(""),
	});

	///
	builder = [];
	builder.push("<span class='special-character'>\"</span>Set exceptional quality standards and demand their fulfillment in all areas of work.<span class='special-character'>\"</span>");
	valuesItems.push({
		SectionTitle: "Insist on the Highest Standards",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("<span class='special-character'>\"</span>Maintain a mindset of constant learning and always be open to new ideas and perspectives.<span class='special-character'>\"</span>");
	valuesItems.push({
		SectionTitle: "Learn and Be Curious",
		SectionText: builder.join(""),
	});

	builder = [];
	builder.push("<span class='special-character'>\"</span>Encourage innovation and creativity<span class='special-character'>,</span> and seek ways to simplify processes and solutions.<span class='special-character'>\"</span>");
	valuesItems.push({
		SectionTitle: "Invent and Simplify",
		SectionText: builder.join(""),
	});


	// Area Title
	const teamAreaTitle = "Our Team";
	const teamItems = [] as TeamItem[];

	// Ryan Porter - Info
	builder = [];
	builder.push("Ryan Porter is the CEO of Porter Legacy Group. He has over 20 years of experience in the real estate industry. ");
	builder.push("Ryan has a proven track record of success and is dedicated to providing the highest level of service to our investors.");
	teamItems.push({
		SectionTitle: "Ryan Porter",
		Subtitle: "Managing Partner",
		ContentText: builder.join(""),
	});

	return {
		ValuesData: {
			ValuesTitle: valuesAreaTitle,
			ValuesItems: valuesItems,
		},
		TeamData: {
			TeamTitle: teamAreaTitle,
			TeamItems: teamItems,
		},
	} as AboutPageData;
}