export type StrategyPageSection = {
	Title: string;
	ContentText: string;
};

export type StrategyPageData = {
	PageTitle: string;
	Sections: ReadonlyArray<StrategyPageSection>;
};