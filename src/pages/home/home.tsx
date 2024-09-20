import React from "react";
import "./home.less";

const Home: React.FC = () => {

	return (
		<div className="home-container">
			<div className="banner">
				<h1>Porter Legacy is a private, multifamily (MF) real estate investment firm focused on workforce housing in the
					Dallas-Fort Worth (DFW) area and the State of Texas. We provide carefully curated investment opportunities
					that offer risk-adjusted, monthly cash flow and capital appreciation with significant tax-advantages for
					individual accredited and institutional investors.
				</h1>
			</div>

			<div className="mission">
				<h2>Our Mission</h2>
				<p>Our mission is to excel in the acquisition, renovation, lease, and divestiture of multifamily properties,
					ensuring consistent returns for investors and building strong relationships with partners in the communities in which we operate.
				</p>
			</div>

		</div>
	);
};

export default Home;