import React from "react";
import "./section-card.less";

interface SectionCardProps {
	title: string;
	content: string;
	logo: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, content, logo }) => {
	return (
		<section className="section-card-container">
			<div className="logo-container">
				<img src={logo} alt="Section logo" className="section-logo" />
			</div>
			<div className="text-container">
				<h2 className={"section-title"}>{title}</h2>
				<p className="section-text" dangerouslySetInnerHTML={{ __html: content }}></p>
			</div>
		</section>
	);
};

export default SectionCard;
