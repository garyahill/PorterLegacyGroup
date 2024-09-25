import React from "react";
import "./banner.less";

const Banner: React.FC = () => {

	const builder: string[] = [];
	builder.push("Porter Legacy is a private, multifamily (MF) real estate investment firm ");
	builder.push("focused on workforce housing in the Dallas-Fort Worth (DFW) area and the State ");
	builder.push("of Texas. We provide carefully curated investment opportunities that offer ");
	builder.push("risk-adjusted, monthly cash flow and capital appreciation with significant ");
	builder.push("tax advantages. Our mission is to excel in the acquisition, renovation, lease, ");
	const Tagline = builder.join("");

	return (
		<div className="banner">
			<h1 className="banner-title">PLG Institutional Real Estate</h1>
			<h1>{Tagline}</h1>
		</div>
	);
};

export default Banner;
