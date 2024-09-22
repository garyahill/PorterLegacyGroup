import React, { useState, useEffect } from "react";
import getInvestmentWithUsText from "../../data/invest";
import { FormData } from "../../models";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./invest.less";

const Invest: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({name: "", email: "", phone: "", experience: ""});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { InvestmentProgramText, GoogleScriptsWebAppUrl } = getInvestmentWithUsText();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch(GoogleScriptsWebAppUrl, {
				method: "POST",
				body: new URLSearchParams(formData),
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			});

			const result = await response.text();

			if (result === "Success") {
				toast.success("Thank you, We'll be in touch soon!");
			} else {
				toast.error("Sorry, there was a problem submitting your information.");
			}
		} catch (error) {
			toast.error("An error occurred during submission.");
		} finally {
			setIsSubmitting(false);
			setFormData({ name: "", email: "", phone: "", experience: "" });
		}
	};

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

					<button type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Submitting..." : "Submit"}
					</button>

				</form>
			</div>

			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={true}
			/>

		</div>
	);
};

export default Invest;
