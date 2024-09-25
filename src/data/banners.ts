import { BannerItem } from "../models";

export function getMainImageBannerText(): BannerItem {
	const builder: string[] = [];

	builder.push("Porter Legacy is a private, multifamily (MF) real estate investment firm focused on workforce ");
	builder.push("housing in the Dallas-Fort Worth (DFW) area and the State of Texas. We provide carefully curated ");
	builder.push("investment opportunities that offer risk-adjusted, monthly cash flow and capital appreciation with ");
	builder.push("significant tax advantages. Our mission is to excel in the acquisition, renovation, lease,");
	builder.push("");

	const MainImageBanner = {
		Title: "Institutional Real Estate",
		Tagline: builder.join(""),
	};

	return MainImageBanner;
}

export function getMissionBannerText(): BannerItem {
	const builder: string[] = [];

	builder.push("Our mission is to excel in the acquisition, renovation, lease, and divestiture of multifamily ");
	builder.push("properties, ensuring consistent returns for investors and building strong relationships with ");
	builder.push("partners in the communities in which we operate.");
	const MissionBanner = {
		Title: "Our Mission",
		Tagline: builder.join(""),
	};

	return MissionBanner;
}