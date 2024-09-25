export type HomePageSection = {
	Title: string;
	ContentText: string;
};

export type HomePageData = {
	Mission: string;
	WhyInvestWithUs: {
		Title: string;
		Sections: ReadonlyArray<HomePageSection>;
	};
};