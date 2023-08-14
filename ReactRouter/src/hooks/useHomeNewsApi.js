import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const apiKey = "da68f4f525134749b4ec0f0dae89782d";

export const useHomeNewsApi = (query) => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const searchQuery = query || "bitcoin";
		fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setIsLoading(false);
			});
	}, [query]);

	return { data, isLoading };
};

useHomeNewsApi.propTypes = {
	query: PropTypes.string
};
