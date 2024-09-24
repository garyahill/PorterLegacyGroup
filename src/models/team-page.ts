export type TeamPageSection = {
	Title: string;
	Subtitle: string;
	ContentText: string;
};

export type TeamPageData = {
	PageTitle: string;
	Sections: ReadonlyArray<TeamPageSection>;
};