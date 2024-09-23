export type HomePageSection = {
	Title: string;
	ContentText: string;
};

export type HomePageData = {
	Tagline: string;
	Mission: string;
	WhyInvestWithUs: {
		Title: string;
		Sections: ReadonlyArray<HomePageSection>;
	};
	Strategy: {
		Title: string;
		Sections: ReadonlyArray<HomePageSection>;
	};
};