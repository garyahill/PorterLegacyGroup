import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { LinkItem } from './header';
import "./hamburgerMenu.less";

interface HamburgerMenuProps {
	linkItems: ReadonlyArray<LinkItem>;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({linkItems}) => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const navRef = useRef<HTMLElement>(null);
	const [scrollY, setScrollY] = useState(0); // [NEW] To track scroll position

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleClickOutside = (event: MouseEvent | TouchEvent) => {
		if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
			setIsOpen(false);
		}
	};

	// Handle scroll event to close the menu
	const handleScroll = () => {

		// Instantly hide the menu by setting display or visibility
		if (navRef.current) {
			navRef.current.style.transition = "none"; // Disable transitions
			navRef.current.style.visibility = "hidden"; // Hide instantly
			setTimeout(() => {
				// Re-enable transitions after hiding to maintain behavior for other interactions
				if (navRef.current) {
					navRef.current.style.transition = ""; // Reset the transition
					navRef.current.style.visibility = ""; // Reset visibility to default behavior
				}
			}, 0);
		}
		setIsOpen(false); // Reset state
		setScrollY(window.scrollY);

	};

	useEffect(() => {
		// Add event listener for click and touchstart
		document.addEventListener('click', handleClickOutside);
		document.addEventListener('touchstart', handleClickOutside);
		window.addEventListener('scroll', handleScroll);

		// Cleanup the event listener on component unmount
		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('touchstart', handleClickOutside);
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const dynamicTop = Math.max(96 - scrollY, 0); // Prevents negative top value

	return (
		<div ref={menuRef} className="hamburger-menu">
			{/* Hamburger Icon */}
			<div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			{/* Menu Items */}
			<nav
				ref={navRef}
				className={`hamburger-navbar ${isOpen ? "open" : ""}`}
				style={{ top: `${dynamicTop}px`, position: 'fixed' }} // Apply dynamic top value here
			>
				<ul>
					{linkItems.map((item, index) => (
						<li key={index}>
							<Link to={item.to}>
							  <span onClick={() => setIsOpen(false)}>{item.text.toUpperCase()}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default HamburgerMenu;
