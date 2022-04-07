import "./app.css";
import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import popular from "./popular.json";
import Header from "./components/header/header";
import key from "./key.json";

const App = (props) => {
	const [videos, setVideos] = useState([]);
	// useEffect(() => {
	// 	const requestOptions = {
	// 		method: "GET",
	// 		redirect: "follow",
	// 	};

	// 	fetch(
	// 		`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=${key.key}`,
	// 		requestOptions
	// 	)
	// 		.then((response) => response.json())
	// 		.then((result) => console.log(result))
	// 		.catch((error) => console.log("error", error));
	// }, []);

	useEffect(() => {
		setVideos(popular.items);
	}, []);

	return (
		<>
			<Header />
			<VideoList videos={videos} />
		</>
	);
};

export default App;
