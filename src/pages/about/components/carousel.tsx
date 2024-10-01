import React from "react";
import Slider, { Settings } from "react-slick";
import { ValuesData } from "../../../models";
import "./carousel.less";

interface CarouselProps {
	data: ValuesData;
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {

	const settings: Settings = {
		dots: true,
		infinite: true,
		speed: 750,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,
		pauseOnHover: true,
		adaptiveHeight: true,  // Ensure height adapts to content
		variableWidth: false,

	};


	return (
		<div className="carousel-container">
			<div className="inner">
				<Slider {...settings}>
					{data.ValuesItems.map((item, index) => (
						<div key={index}>
							<h2>{item.SectionTitle}</h2>
							<p dangerouslySetInnerHTML={{ __html: item.SectionText }}></p>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Carousel;