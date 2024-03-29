import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(({ video, video: { snippet }, onSelect, display }) => {
	const displayType = display === "list" ? styles.list : styles.grid;
	console.log("item");
	return (
		<li
			className={`${styles.container} ${displayType}`}
			onClick={() => onSelect(video)}
		>
			<div className={styles.video}>
				<img
					src={snippet.thumbnails.medium.url}
					alt="thunmnail"
					className={styles.thumbnail}
				/>
				<div className={styles.metadata}>
					<p className={styles.title}>{snippet.title}</p>
					<p className={styles.channel}>{snippet.channelTitle}</p>
				</div>
			</div>
		</li>
	);
});

export default VideoItem;
