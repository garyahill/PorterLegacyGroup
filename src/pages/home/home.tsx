import React from "react";
import getHomePageData from "../../data/home";
import SectionCard from "./components/section-card";
import checkmark from "../../images/icon-large-checkmark.png";
import dollarHand from "../../images/icon-hand-dollar.png";
import spyglassCheckmark from "../../images/icon-spyglass-checkmark.png";
import spyglassGears from "../../images/icon-spyglass-gears.png";
import twoBuildings from "../../images/icon-two-buildings.png";
import "./home.less";

const Home: React.FC = () => {
	const { Tagline, Mission, WhyInvestWithUs, Strategy } = getHomePageData();
	const strategyImages = [spyglassCheckmark, twoBuildings, dollarHand, spyglassGears];

	return (
		<div className="home-container">
			<div className="banner">
				<h1>{Tagline}</h1>
			</div>

			<div className="mission">
				<h2>Our Mission</h2>
				<p>{Mission}</p>
			</div>

			<div className="why-invest">
				<h2 className="title">{WhyInvestWithUs.Title}</h2>
				{WhyInvestWithUs.Sections.map((section, index) => (
					<SectionCard
						key={index}
						title={section.Title}
						content={section.ContentText}
						logo={checkmark}
					/>
				))}
			</div>

			<div className="strategy">
				<h2 className="title">{Strategy.Title}</h2>
				{Strategy.Sections.map((section, index) => (
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

export default Home;