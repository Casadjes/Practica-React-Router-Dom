import { useState } from "react";
import PropTypes from "prop-types";
import { NoImageFromApi } from "../NoImageFromApi/NoImageFromApi";

export const NewsCard = ({ title, urlToImg, urlToArticle, needsMainCard }) => {
	const [imageError, setImageError] = useState(false);

	const handleImageError = () => {
		setImageError(true);
	};

	return (
		<article
			className={`w-96 sm:w-52 ${
				needsMainCard
					? "first-of-type:w-full first-of-type:text-4xl first-of-type:mb-8"
					: ""
			} `}>
			{imageError || !urlToImg ? (
				<NoImageFromApi />
			) : (
				<img
					src={urlToImg}
					className={`w-full${
						needsMainCard ? "first-of-type:h-auto" : ""
					} object-cover`}
					alt='imagen'
					onError={handleImageError}
				/>
			)}
			<h3 className='text-[#00144e] font-semibold hover:underline'>
				<a href={urlToArticle}>{title}</a>
			</h3>
		</article>
	);
};

NewsCard.propTypes = {
	title: PropTypes.string,
	urlToImg: PropTypes.string,
	urlToArticle: PropTypes.string,
	needsMainCard: PropTypes.bool.isRequired
};
