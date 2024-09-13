import React, { useState } from "react";
import { Question } from "../../../models";
import FaqItem from "./faq-item";

interface FaqList {
	faqs: ReadonlyArray<Question>;
}

const FaqList: React.FC<FaqList> = ({ faqs }) => {
	const [openItem, setOpenItem] = useState<number | undefined>(undefined);

	const getElements = () => {
		const results = faqs.map((element, index: number) => {
			const itemIsOpen = openItem === index ? true : false;
			return (
				<section key={`Question_Group_${index}`}>
					<FaqItem
						Question={element}
						Index={index}
						Open={itemIsOpen}
						OnClick={() => itemIsOpen ? setOpenItem(undefined) : setOpenItem(index)}
					/>
				</section>
			)
		});
		return results;
	}

	return getElements();
};

export default FaqList;