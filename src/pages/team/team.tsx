import React from "react";
import ryan from "../../images/ryan.jpg";
import "./team.less";

const Team: React.FC = () => {

	return (
		<div className="team-container">
			<img src={ryan} alt="" />
		</div>
	);
};

export default Team;