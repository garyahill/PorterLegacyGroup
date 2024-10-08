import React from "react";
import getHomePageData from "../../data/home";
import SectionCard from "./components/section-card";
import checkmark from "../../images/icon-large-checkmark.png";
import "./home.less";

const Home: React.FC = () => {
	const { WhyInvestWithUs } = getHomePageData();

	return (
		<div className="home-container">

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

		</div>
	);
};

export default Home;