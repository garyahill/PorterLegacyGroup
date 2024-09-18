import React from "react";
import "./invest.less";

const Invest: React.FC = () => {

	return (
		<div className="invest-container">
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
				</select>

				<button type="submit">Submit</button>
			</form>
		</div>

	);
};

export default Invest;