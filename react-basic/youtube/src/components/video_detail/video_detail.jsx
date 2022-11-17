import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet } }) => {
	console.log(video);
	return (
		<>
			<iframe
				id="player"
				type="text/html"
				width="100%"
				height="360"
				src={`http://www.youtube.com/embed/${video.id}`}
				frameBorder="0"
			></iframe>
			<h2>{snippet.title}</h2>
			<h3>{snippet.channelTitle}</h3>
			<pre className={styles.description}>{snippet.description}</pre>
		</>
	);
};
export default VideoDetail;
