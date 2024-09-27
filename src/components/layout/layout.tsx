import React from "react";
import { Outlet, useLocation  } from "react-router-dom";
import Header from "./header";
import MainBanner from "./main-banner";
import MissionBanner from "./mission-banner";
import { getMainImageBannerText, getMissionBannerText } from "../../data/banners";
import Footer from "./footer";
import "./layout.less";
import homeBuilding from "../../images/building-home.jpg";
import aboutUsBuilding from "../../images/building-about-us.jpg";
import strategyBuilding from "../../images/building-white-and-brick.jpg";
import homeBottomBuilding from "../../images/building-black-rail-balcony.jpg";



const Layout: React.FC = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/';
	const isAboutPage = location.pathname === '/about';
	const isStrategyPage = location.pathname === '/strategy';

	return (
		<div className="layout-container">
			<Header />
			{isHomePage &&
				<>
					<MainBanner bannerItem={getMainImageBannerText()} marginTop={"3px"} backgroundImage={homeBuilding} />
					<MissionBanner bannerItem={getMissionBannerText()} />
				</>
			}
			<main className="page-content">
				<Outlet />
			</main>
			{isHomePage && <MainBanner backgroundImage={homeBottomBuilding} /> }
			{isAboutPage && <MainBanner backgroundImage={aboutUsBuilding} marginTop="50px" />}
			{isStrategyPage && <MainBanner backgroundImage={strategyBuilding} marginTop="50px" />}
			<Footer />
		</div>
	);
}

export default Layout;