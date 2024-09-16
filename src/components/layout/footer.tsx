import * as React from "react";
import "./footer.less";
import logo from "../../images/logo-main-white-no-background.png";

const Footer: React.FC = () => {

	return (
		<footer className="footer-container">

			<div className="flex-container">
				<div className="footer-logo">
					<img src={logo} alt="logo" />
				</div>

				<div className="footer-contact">
					<h4>Get in Touch with Us</h4>
					<address>
						<span>Porter Legacy Group</span>
						<span>1234 Financial District Avenue, Suite 1000</span>
						<span>Metropolis, NY 10001</span>
					</address>
					<p>
						<a href="tel:+1234567890">Phone: +1 (234) 555-8900</a>
						<a href="mailto:info@porterlegacygroup.com">Email: info@porterlegacygroup.com</a>
					</p>

					<div className="copyright">
						<small>Copyright <span className="symbol">&copy;</span> 2024 Porter Legacy Group</small>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;