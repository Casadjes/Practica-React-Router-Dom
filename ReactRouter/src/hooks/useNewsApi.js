import { useEffect, useState } from "react";

const apiKey = "da68f4f525134749b4ec0f0dae89782d";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

export const useNewsApi = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setIsLoading(false);
			});
	}, []);

	return { data, isLoading };
};
