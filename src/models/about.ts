export type TeamMemberSection  = {
	ContentText: string;
};

export type ValuesItem = {
	SectionTitle: string;
	SectionText: string;
};

export type ValuesData = {
	ValuesTitle: string;
	ValuesSummaryItems: ReadonlyArray<string>;
	ValuesItems: ReadonlyArray<ValuesItem>;
};

export type TeamData = {
	TeamTitle: string;
	MemberName: string;
	MemberLinkedIn: string;
	TeamMemberSections: ReadonlyArray<TeamMemberSection>;
};

export type AboutPageData = {
	ValuesData: ValuesData;
	TeamData: TeamData;
};