import React from "react";
import "./invest.less";

const Invest: React.FC = () => {

	return (
		<div className="invest-container">
			<h1>Invest with Us</h1>

			<div className="flex-container">
				<div className="info-section">
					<h2>About Our Investment Program</h2>
					<aside>We are committed to implementing our strategy with diligence and transparency, and look forward to partnering with investors who share our long-term vision. Learn more about our process and how we can help you grow.</aside>
				</div>

				<form>
					<label htmlFor="name">Full Name</label>
					<input type="text" id="name" name="name" placeholder="Full Name" required />

					<label htmlFor="email">Email Address</label>
					<input type="email" id="email" name="email" placeholder="Email Address" required />

					<label htmlFor="phone">Phone Number</label>
					<input type="tel" id="phone" name="phone" placeholder="Phone Number" required />

					<label htmlFor="experience">Investor Experience Level</label>
					<select id="experience" name="experience" required>
						<option value="" disabled selected>Select Experience Level</option>
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