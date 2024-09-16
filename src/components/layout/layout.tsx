import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import "./layout.less";

const Layout: React.FC = () => {
	return (
		<div className="layout-container">
			<Header />
			<main className="page-content">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default Layout;