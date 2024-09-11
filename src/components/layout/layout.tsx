import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import "./layout.less";

const Layout: React.FC = () => {
	return (
		<div className="layout-container">
			<Header />
			<main className="page-content">
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;