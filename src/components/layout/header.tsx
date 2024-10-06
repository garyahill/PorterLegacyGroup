import * as React from "react";
import "./header.less";
import Navbar from "./navbar";
import HamburgerMenu from "./hamburger-menu";
import logo from "../../images/logo-white-no-background.png";

export type LinkItem = {
	to: string;
	text: string;
};

const Header: React.FC = () => {

	const items: ReadonlyArray<LinkItem> = [
		{ to: "/", text: "Home" },
		{ to: "/about", text: "About" },
		{ to: "/strategy", text: "Our Strategy" },
		{ to: "/faq", text: "FAQ" },
		{ to: "/invest", text: "Invest with Us" },
	];

	return (
		<header className="header-container">
			<div className="flex-container">
				<div className="title">
					<img src={logo} alt="logo" />
					<h1>Porter Legacy Group</h1>
				</div>
				<HamburgerMenu linkItems={items} />
				<Navbar linkItems={items} />
			</div>
		</header>
	);
};

export default Header;