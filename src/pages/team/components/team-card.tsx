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
		<section className="team-card-container">
			<div className="logo-container">
				<img src={logo} alt="photo" className="section-logo" />
			</div>
			<div className="text-container">
				<h2 className={"section-title"}>{title}</h2>
				<h3 className={"section-subtitle"}>{subtitle}</h3>
				<p className="section-text">{content}</p>
			</div>
		</section>
	);
};

export default TeamCard;
