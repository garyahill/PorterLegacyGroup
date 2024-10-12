import React from "react";
import getAboutPageData from "../../data/about";
import TeamCard from "./components/team-card";
import Carousel from "./components/carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ryan from "../../images/ryan-porter.jpg";
import "./about.less";
import ValuesSummary from "./components/values-summary";

const Team: React.FC = () => {
	const { TeamData, ValuesData } = getAboutPageData();
	const { MemberName, MemberLinkedIn, TeamTitle } = TeamData;

	return (
		<div className="about-container">
			<div className="team-container">
				<h1>{TeamData.TeamTitle}</h1>
				<div className="team-member-container">
					{
						<TeamCard
							title={TeamTitle}
							memberName={MemberName}
							memberLinkedIn={MemberLinkedIn}
							picture={ryan}
						/>
					}
				</div>
			</div>

			<div className="values-container">
				<h1>{ValuesData.ValuesTitle}</h1>
				<div className="outline-container">
					<ValuesSummary items={ValuesData.ValuesSummaryItems} />
					<Carousel data={ValuesData} />
				</div>
			</div>
		</div>
	);

};

export default Team;