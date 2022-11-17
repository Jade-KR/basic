import React from "react";
import styles from "./header.module.css";
import { testContext } from "../../context/DarkModeContext";
import { useContext } from "react";
const Header = ({ filters, onFilterChange, filter }) => {
	const { test, toggleTest } = useContext(testContext);
	console.log(test);

	const testClick = () => {
		toggleTest();
	};
	return (
		<header className={styles.header}>
			<ul className={styles.filters}>
				{filters.map((value, idx) => (
					<li key={idx}>
						<button
							onClick={() => onFilterChange(value)}
							className={`${styles.filter} ${
								filter === value && styles.selected
							}`}
						>
							{value}
						</button>
					</li>
				))}
			</ul>
			<button onClick={testClick}>클릭</button>
		</header>
	);
};

export default Header;
