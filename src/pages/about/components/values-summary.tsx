import React from "react";
import "./values-summary.less";

interface ValuesSummaryProps {
	items: ReadonlyArray<string>;
}

const ValuesSummary: React.FC<ValuesSummaryProps> = ({ items }) => {
	return (
		<div className="values-summary-container">
			{items.map((item, index) => (
				<p key={index}>{item}</p>
			))}
		</div>
	);
};

export default ValuesSummary;