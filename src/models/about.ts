export type TeamItem = {
	SectionTitle: string;
	Subtitle: string;
	ContentText: string;
};

export type ValuesItem = {
	SectionTitle: string;
	SectionText: string;
};

export type ValuesData = {
	ValuesTitle: string;
	ValuesItems: ReadonlyArray<ValuesItem>;
};

export type TeamData = {
	TeamTitle: string;
	TeamItems: ReadonlyArray<TeamItem>;
};

export type AboutPageData = {
	ValuesData: ValuesData;
	TeamData: TeamData;
};