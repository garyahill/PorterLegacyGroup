import React from "react";
import "./team-card.less";
import linkedin from "../../../images/linkedin.svg";

interface TeamCardProps {
	title: string;
	memberName: string;
	memberLinkedIn: string;
	picture: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ picture, memberName, memberLinkedIn }) => {

	return (
		<section className="team-card-container">

			<div className="outer-logo-container">
		  		<img src={picture} alt="Logo" className="section-logo" />
			</div>

			{/* Title and Text stacked on the right */}
			<div className="content-container">

				<div className="title-container">

					<a href={memberLinkedIn} target="_blank" rel="noopener noreferrer">
						<img src={linkedin} alt="" />
						<h3 className="section-subtitle">{memberName}</h3>
					</a>
				</div>

				<div className="inner-logo-container">
		  			<img src={picture} alt="Logo" className="section-logo" />
				</div>

				<div className="text-container">
					<p>
						Ryan is a Principal Consultant with Amazon Web Services (AWS) where he advises Technology Executives of utilities and publicly
						traded companies on how to migrate and modernize their infrastructure to the Amazon cloud. Ryan has 25 years of consulting and
						technology experience in the San Francisco Bay Area.
					</p>
					<p>
						Ryan grew up in the Real Estate & Investment Industries with his father
						<a href='https://www.linkedin.com/in/bruce-a-porter-1b841a5' target='_blank' rel='noopener noreferrer'> Bruce A. Porter </a>
						(RE Broker,  Retail Investment Advisor & former owner of a Broker Dealer)
						and uncles including Davis R. Chant (owner of <a href='https://www.chantre.com/' target='_blank' rel='noopener noreferrer'>Davis R. Chant Realtors</a> in the Poconos) on both coasts.
					</p>
					<p>
						Ryan began his real estate journey remodeling, renting and flipping apartments in California and Latin America for 10 years.
						Over the years Ryan's passion for Real Estate has deepened and he views multifamily as one of the top opportunities to generate
						wealth and secure solid risk-adjusted returns.
					</p>
				</div>

			</div>
	  </section>
	);
};

export default TeamCard;