import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

const VideoList = ({ videos, onSelect, display }) => (
	<ul className={styles.videos}>
		{videos.map((video) => (
			<VideoItem
				key={video.id}
				video={video}
				onSelect={onSelect}
				display={display}
			></VideoItem>
		))}
	</ul>
);
export default VideoList;
