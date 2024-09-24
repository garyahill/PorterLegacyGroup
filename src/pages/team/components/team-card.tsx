import React from "react";
import "./team-card.less";

interface TeamCardProps {
	title: string;
	subtitle: string;
	content: string;
	logo: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ title, subtitle, content, logo }) => {
	return (
		<section className="section-card-container">
			<div className="logo-container">
				<img src={logo} alt="Section logo" className="section-logo" />
			</div>
			<div className="text-container">
				<h2 className={"section-title"}>{title}</h2>
				<h2 className={"section-title"}>{subtitle}</h2>
				<p className="section-text">{content}</p>
			</div>
		</section>
	);
};

export default TeamCard;
