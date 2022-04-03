import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = (props) => {
	return (
		<ul className={styles.videos_wrap}>
			{props.videos.map((video) => {
				return <VideoItem key={video.etag} video={video} />;
			})}
		</ul>
	);
};

export default VideoList;
