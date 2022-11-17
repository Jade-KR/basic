import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import VideoList from "./components/video_list/video_list";
// import popular from "./popular.json";
// import search from "./search.json";
const App = ({ youtube }) => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	useEffect(() => {
		youtube
			.mostPopular() //
			.then((videos) => setVideos(videos));
		// setVideos(popular.items);
	}, [youtube]);

	const searchVideo = (query) => {
		youtube
			.search(query) //
			.then((videos) => {
				setVideos(videos);
				setSelectedVideo(null);
			});

		// const data = search.items.map((item) => ({ ...item, id: item.id.videoId }));

		// console.log(data);
		// setVideos(data);
		// setSelectedVideo(null);
	};

	const onSelect = (video) => {
		setSelectedVideo(video);
	};

	return (
		<div className={styles.app}>
			<SearchHeader onSearch={searchVideo}></SearchHeader>
			<section className={styles.content}>
				{selectedVideo && (
					<div className={styles.detail}>
						<VideoDetail video={selectedVideo}></VideoDetail>
					</div>
				)}
				<section className={styles.list}>
					<VideoList
						videos={videos}
						onSelect={onSelect}
						display={selectedVideo ? "list" : "grid"}
					></VideoList>
				</section>
			</section>
		</div>
	);
};

export default App;
