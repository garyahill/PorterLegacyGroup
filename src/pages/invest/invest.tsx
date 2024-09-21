import React, { useState } from "react";
import "./invest.less";
import getInvestmentWithUsText from "../../data/invest";

type FormData = {
	name: string;
	email: string;
	phone: string;
	experience: string;
};

const Invest: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		experience: "",
	});

	const { InvestmentProgramText, GoogleScriptsWebAppUrl } = getInvestmentWithUsText();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const response = await fetch(GoogleScriptsWebAppUrl, {
		  method: 'POST',
		  body: new URLSearchParams(formData),
		  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		});
		const result = await response.text();
		// eslint-disable-next-line no-console
		console.log(result);  // Should log 'Success'
	  };

	// Handle input changes
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div className="invest-container">
			<h1>Invest with Us</h1>

			<div className="flex-container">
				<div className="info-section">
					<h2>About Our Investment Program</h2>
					<aside>
						{ InvestmentProgramText }
					</aside>
				</div>

				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Full Name<span className="required">*</span></label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Your Name"
						value={formData.name}
						onChange={handleChange}
						required
					/>

					<label htmlFor="email">Email Address<span className="required">*</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Your Email"
						value={formData.email}
						onChange={handleChange}
						required
					/>

					<label htmlFor="phone">Phone Number<span className="required">*</span>
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						placeholder="Your Phone Number"
						value={formData.phone}
						onChange={handleChange}
						required
					/>

					<label htmlFor="experience">Investor Experience Level<span className="required">*</span>
					</label>
					<select
						id="experience"
						name="experience"
						value={formData.experience}
						onChange={handleChange}
						required
					>
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
