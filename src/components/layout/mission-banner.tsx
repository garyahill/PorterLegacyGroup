import React from "react";
import { BannerItem } from "../../models";
import "./mission-banner.less";

type MissionBannerProps = {
	bannerItem: BannerItem;
};

const MissionBanner: React.FC<MissionBannerProps> = ({ bannerItem = {} }) => {
	const { Title, Tagline } = bannerItem;

	return (
		<div className="mission-container">
			<h1 className="banner-title">{Title}</h1>
			<h1>{Tagline}</h1>
		</div>
	);
};

export default MissionBanner;
