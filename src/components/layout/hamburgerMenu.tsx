import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { LinkItem } from './header';
import "./hamburgerMenu.less";

interface HamburgerMenuProps {
	linkItems: ReadonlyArray<LinkItem>;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({linkItems}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="hamburger-menu">
			{/* Hamburger Icon */}
			<div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			{/* Menu Items */}
			<nav className={`hamburger-navbar ${isOpen ? "open" : ""}`}>
				<ul>
					{linkItems.map((item, index) => (
						<li key={index}>
							<Link to={item.to}>
							  <span onClick={() => setIsOpen(!isOpen)}>{item.text.toUpperCase()}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default HamburgerMenu;
