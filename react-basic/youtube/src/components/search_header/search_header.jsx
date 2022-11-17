import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SeachHeader = ({ onSearch }) => {
	const inputRef = useRef();

	const handleSearch = () => {
		const query = inputRef.current.value;
		if (query) {
			onSearch(query);
			inputRef.current.value = "";
		}
	};

	const onEnter = (e) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<header className={styles.container}>
			<div>Youtube</div>
			<div className={styles.middle}>
				<div className={styles.search_box}>
					<input
						ref={inputRef}
						className={styles.search}
						type="text"
						placeholder="검색"
						onKeyPress={onEnter}
					/>
				</div>
				<button className={styles.button} onClick={handleSearch}>
					검색
				</button>
			</div>
			<div>menu</div>
		</header>
	);
};

export default SeachHeader;
