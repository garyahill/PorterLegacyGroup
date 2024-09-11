import * as React from "react";
import { Link } from "react-router-dom";
import { LinkItem } from "./header";
import "./navbar.less";

interface HamburgerMenuProps {
	linkItems: ReadonlyArray<LinkItem>;
}

const Navbar: React.FC<HamburgerMenuProps> = ({linkItems}) => {
	return (
		<nav className="navbar">
			<ul>
				{linkItems.map((item, index) => (
					<li key={index}>
						<Link to={item.to}>{item.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;