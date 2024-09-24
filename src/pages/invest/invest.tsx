import React, { useState } from "react";
import getInvestmentWithUsText from "../../data/invest";
import { FormData } from "../../models";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./invest.less";

const Invest: React.FC = () => {
	const [formData, setFormData] = useState<FormData>(getNewFormDate());
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { InvestmentProgramText, GoogleScriptsWebAppUrl } = getInvestmentWithUsText();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
		  const response = await fetch(GoogleScriptsWebAppUrl, {
				method: "POST",
				body: new URLSearchParams({
			  		...formData,
			  		Experience: formData.Experience.join(", "),
				}),
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
			setFormData(getNewFormDate);
		}

	  };


	  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value, type } = e.target;

		// Only check for 'checked' if the input type is checkbox
		const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : false;

		setFormData((prevState) => {
		  if (type === "checkbox") {
			// For checkboxes, toggle the value in the array
				const newRealEstateExperience = checked
			  ? [...prevState.Experience, value] // Add if checked
			  : prevState.Experience.filter((item) => item !== value); // Remove if unchecked

				return {
					...prevState,
					Experience: newRealEstateExperience,
				};
		  } else {
			// For other input types (text, email, phone, radio, select)
				return {
					...prevState,
					[name]: value, // Update the value for text, email, phone, etc.
				};
		  }
		});
	  };



	return (
		<div className="invest-container">
			<h1>Invest with Us</h1>

			<div className="flex-container">
				<div className="info-section">
					<h2>About Our Investment Program</h2>
					<aside>{InvestmentProgramText}</aside>
				</div>

				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Full Name<span className="required">*</span></label>
					<input
						type="text"
						id="name"
						name="Name"
						placeholder="Your Name"
						value={formData.Name}
						onChange={handleChange}
						required
					/>

					<label htmlFor="email">Email Address<span className="required">*</span></label>
					<input
						type="email"
						id="email"
						name="Email"
						placeholder="Your Email"
						value={formData.Email}
						onChange={handleChange}
						required
					/>

					<label htmlFor="phone">Phone Number<span className="required">*</span></label>
					<input
						type="tel"
						id="phone"
						name="Phone"
						placeholder="Phone Number"
						value={formData.Phone}
						onChange={handleChange}
						required
					/>

					<label>Are you an accredited investor?<span className="required">*</span></label>
					<div className="radio-group">
						<div className="radio-button-pair">
							<input type="radio" id="non-accredited" name="Accredited" value="Non-Accredited" required onChange={handleChange} />
							<label htmlFor="non-accredited">Non-accredited</label>
						</div>

						<div className="radio-button-pair">
							<input type="radio" id="accredited" name="Accredited" value="Accredited" onChange={handleChange} />
							<label htmlFor="accredited">Accredited</label>
						</div>

						<div className="radio-button-pair">
							<input type="radio" id="qualified" name="Accredited" value="Qualified" onChange={handleChange} />
							<label htmlFor="qualified">Qualified</label>
						</div>
					</div>

					<label>Do you have Real Estate Investment Experience?</label>
					<div className="checkbox-group">
						<div className="check-box-pair">
							<input type="checkbox" id="single-family" name="Experience" value="Single-Family" onChange={handleChange} />
							<label htmlFor="single-family">Single family</label>
						</div>

						<div className="check-box-pair">
							<input type="checkbox" id="multi-family-lp" name="Experience" value="Multi-Family-LP" onChange={handleChange} />
							<label htmlFor="multi-family-lp">Multifamily Limited Partner</label>
						</div>

						<div className="check-box-pair">
							<input type="checkbox" id="multi-family-gp" name="Experience" value="Multi-Family-GP" onChange={handleChange} />
							<label htmlFor="multi-family-gp">Multifamily General Partner</label>
						</div>

						<div className="check-box-pair">
							<input type="checkbox" id="co-gp" name="Experience" value="Co-GP" onChange={handleChange} />
							<label htmlFor="co-gp">Co-GP</label>
						</div>

						<div className="check-box-pair">
							<input type="checkbox" id="reits" name="Experience" value="REITS" onChange={handleChange} />
							<label htmlFor="reits">REITs</label>
						</div>

					</div>

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

function getNewFormDate() {
	return {
		Name: "",
		Email: "",
		Phone: "",
		Accredited: "",
		Experience: [],
	};
}

export default Invest;


