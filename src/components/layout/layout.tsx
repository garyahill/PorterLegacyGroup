import React from "react";
import { Outlet, useLocation  } from "react-router-dom";
import Header from "./header";
import Banner from "./banner";
import Footer from "./footer";
import "./layout.less";

const Layout: React.FC = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	return (
		<div className="layout-container">
			<Header />
			{isHomePage && <Banner />}
			<main className="page-content">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default Layout;