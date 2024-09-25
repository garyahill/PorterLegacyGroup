import React from "react";
import getStrategyPageData from "../../data/strategy";
import SectionCard from "../home/components/section-card";
import dollarHand from "../../images/icon-hand-dollar.png";
import spyglassCheckmark from "../../images/icon-spyglass-checkmark.png";
import spyglassGears from "../../images/icon-spyglass-gears.png";
import twoBuildings from "../../images/icon-two-buildings.png";
import "./strategy.less";

const Strategy: React.FC = () => {
	const { PageTitle, Sections } = getStrategyPageData();
	const strategyImages = [spyglassCheckmark, twoBuildings, dollarHand, spyglassGears];

	return (
		<div className="strategy-container">
			<h1>{ PageTitle }</h1>

			<div className="strategy">
				{Sections.map((section, index) => (
					<SectionCard
						key={index}
						title={section.Title}
						content={section.ContentText}
						logo={strategyImages[index]}
					/>
				))}
			</div>
		</div>
	);
};

export default Strategy;