import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video: { snippet } }) => {
	return (
		<li className={styles.video_wrap}>
			<img
				className={styles.thumnail}
				src={snippet.thumbnails.medium.url}
				alt=""
			/>
			<div className={styles.video_info}>
				<img
					className={styles.channel_img}
					src="/images/channel.png"
					alt="channel"
				/>
				<div>
					<div className={styles.title}>{snippet.title}</div>
					<div className={styles.channel_title}>{snippet.channelTitle}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoItem;
