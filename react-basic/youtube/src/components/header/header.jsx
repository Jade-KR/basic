import React from "react";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
	return (
		<header className={styles.header}>
			<div className={styles.header_left}>
				<FontAwesomeIcon icon={faBars} className={styles.hamburgers} />
				<div className={styles.logo_wrap}>
					<img src="/images/logo.png" alt="logo" className={styles.logo} />
					<div className={styles.title}>Youtube</div>
				</div>
			</div>

			<div className={styles.search_wrap}>
				<input type="text" className={styles.search} placeholder="검색" />
				<button className={styles.submit}>
					<img
						className={styles.search_img}
						src="/images/search.png"
						alt="submit"
					/>
				</button>
			</div>
			<div className="menus_wrap">menus</div>
		</header>
	);
};

export default Header;
