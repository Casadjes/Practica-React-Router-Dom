import { useHomeNewsApi } from "../hooks/useHomeNewsApi";
import { NewsCard } from "../components/NewsCard/NewsCard";
import { useContext } from "react";
import { counterContext } from "../context/counterContext";

const Home = () => {
	const { searchBarInputValue } = useContext(counterContext);
	const { data } = useHomeNewsApi(searchBarInputValue);

	return (
		<section className='w-full flex justify-between flex-wrap'>
			{/* cards */}
			{data?.articles?.slice(0, 15).map((article) => (
				<NewsCard
					title={article.title}
					urlToImg={article.urlToImage}
					urlToArticle={article.url}
					needsMainCard={false}
					key={article.title}
				/>
			))}
		</section>
	);
};
export default Home;
