import React from "react";
import "./team-card.less";
import { TeamMemberSection } from "../../../models";

interface TeamCardProps {
	title: string;
	memberName: string;
	memberLinkedIn: string;
	logo: string;
	teamMemberSections: ReadonlyArray<TeamMemberSection>;
}

const TeamCard: React.FC<TeamCardProps> = ({ logo, memberName, teamMemberSections }) => {
	return (
		<section className="team-card-container">

			<div className="outer-logo-container">
		  		<img src={logo} alt="Logo" className="section-logo" />
			</div>

			{/* Title and Text stacked on the right */}
			<div className="content-container">

				<div className="title-container">
					<h3 className="section-subtitle">{memberName}</h3>
				</div>

				<div className="inner-logo-container">
		  			<img src={logo} alt="Logo" className="section-logo" />
				</div>

				<div className="text-container">
					{teamMemberSections.map((section, index) => (
						<p key={index} className="section-content">{section.ContentText}</p>
					))}
				</div>

			</div>
	  </section>
	);
};

export default TeamCard;