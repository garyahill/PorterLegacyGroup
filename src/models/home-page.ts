export type HomePageSection = {
	Title: string;
	ContentText: string;
};

export type HomePageData = {
	WhyInvestWithUs: {
		Title: string;
		Sections: ReadonlyArray<HomePageSection>;
	};
};