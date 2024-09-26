import React from "react";
import { BannerItem } from "../../models";
import "./mission-banner.less";

type MissionBannerProps = {
	bannerItem: BannerItem;
};

const MissionBanner: React.FC<MissionBannerProps> = ({ bannerItem = {} }) => {
	const { Tagline } = bannerItem;

	return (
		<div className="mission-container">
			<h1>{Tagline}</h1>
		</div>
	);
};

export default MissionBanner;
