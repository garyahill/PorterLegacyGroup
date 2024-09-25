import React from "react";
import getTeamPageData from "../../data/team";
import TeamCard from "./components/team-card";
import ryan from "../../images/ryan-porter.jpg";
import gary from "../../images/gary-hill.jpg";
import "./about.less";

const Team: React.FC = () => {
	const { PageTitle, Sections } = getTeamPageData();
	const teamImages = [ryan, gary];

	return (
		<div className="about-container">
			<h1>{ PageTitle }</h1>

			<div className="team-member-container">
				{
					Sections.map((section, index) => (
						<TeamCard
							key={index}
							title={section.Title}
							subtitle={section.Subtitle}
							logo={teamImages[index]}
							content={section.ContentText}
						/>
					))
				}
			</div>
		</div>
	);

};

export default Team;