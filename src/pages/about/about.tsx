import React from "react";
import getAboutPageData from "../../data/about";
import TeamCard from "./components/team-card";
import Carousel from "./components/carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./about.less";
import ryan from "../../images/ryan-porter.jpg";

const Team: React.FC = () => {
	const { TeamData, ValuesData } = getAboutPageData();
	const teamImages = [ryan];

	return (
		<div className="about-container">
			<div className="values-container">
				<h1>{ValuesData.ValuesTitle}</h1>
				<Carousel data={ValuesData} />
			</div>

			<div className="team-container">
				<h1>{TeamData.TeamTitle}</h1>
				<div className="team-member-container">
					{
						TeamData.TeamItems.map((section, index) => (
							<TeamCard
								key={index}
								title={section.SectionTitle}
								subtitle={section.Subtitle}
								logo={teamImages[index]}
								content={section.ContentText}
							/>
						))
					}
				</div>
			</div>

		</div>
	);

};

export default Team;