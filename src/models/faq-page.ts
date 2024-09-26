export interface Question {
	Question: string;
	Answer: string;
}

export interface FaqPageData {
	PageTitle: string;
	Questions: Question[];
}