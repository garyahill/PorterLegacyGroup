import React from "react";
import "./invest.less";
import logo from "../../images/logo-secondary-no-background.png";

const Invest: React.FC = () => {

	return (
		<div className="invest-container">
			<h1>Invest with Us</h1>

			<div className="flex-container">
				<div className="info-section">
					<h2>About Our Investment Program</h2>
					<aside>We are committed to implementing our strategy with diligence and transparency, and look forward to partnering with investors who share our long-term vision. Learn more about our process and how we can help you grow.</aside>
					<div className="image-container">
						<img src={logo} alt="logo" />
					</div>
				</div>

				<form>
					<label htmlFor="name">Full Name<span className="required">*</span></label>
					<input type="text" id="name" name="name" placeholder="Your Name" required />

					<label htmlFor="email">Email Address<span className="required">*</span></label>
					<input type="email" id="email" name="email" placeholder="Your Email" required />

					<label htmlFor="phone">Phone Number<span className="required">*</span></label>
					<input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required />

					<label htmlFor="experience">Investor Experience Level<span className="required">*</span></label>
					<select id="experience" name="experience" required defaultValue="">
						<option value="" disabled>Select Experience Level</option>
						<option value="beginner">Beginner</option>
						<option value="intermediate">Intermediate</option>
						<option value="advanced">Advanced</option>
						<option value="accredited">Accredited</option>
					</select>

					<button type="submit">Submit</button>
				</form>
			</div>



		</div>

	);
};

export default Invest;