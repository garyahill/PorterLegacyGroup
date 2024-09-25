import React from "react";
import { BannerItem } from "../../models";
import "./main-banner.less";

type MainBannerProps = {
	bannerItem?: BannerItem;
	marginTop?: string;
	backgroundImage?: string;
};

const Banner: React.FC<MainBannerProps> = ({ bannerItem, marginTop = "0px", backgroundImage }) => {
	const backgroundStyle = backgroundImage
		? { backgroundImage: `url(${backgroundImage})`, marginTop }
		: { marginTop };

	return (
		<div className="main-banner" style={backgroundStyle}>
			{bannerItem?.Title && <h1 className="banner-title">{bannerItem.Title}</h1>}
			{bannerItem?.Tagline && <h1>{bannerItem.Tagline}</h1>}
		</div>
	);
};

export default Banner;
