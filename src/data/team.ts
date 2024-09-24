import { TeamPageData, TeamPageSection } from "../models";

export default function getHomePageData(): TeamPageData {
	let builder: string[] = [];

	// Page Title
	const PageTitle = "Meet Our Team";

	// Sections
	const Sections = [] as TeamPageSection[];

	// Ryan Porter - Info
	builder = [];
	builder.push("Ryan Porter is the CEO of Porter Legacy. He has over 20 years of experience in the real estate industry. ");
	builder.push("Ryan has a proven track record of success and is dedicated to providing the highest level of service to our investors.");
	Sections.push({
		Title: "Ryan Porter",
		Subtitle: "Managing Partner",
		ContentText: builder.join(""),
	});

	// Gary Hill - Info
	builder = [];
	builder.push("Gary Hill is Technology Advisor at Porter Legacy. He has over 20 years of experience in the technology industry. ");
	builder.push("Gary has a proven track record of success and is dedicated to providing the highest level of service to our investors.");
	Sections.push({
		Title: "Gary Hill",
		Subtitle: "Technology Advisor",
		ContentText: builder.join(""),
	});

	return {
		PageTitle,
		Sections,
	} as TeamPageData;
}