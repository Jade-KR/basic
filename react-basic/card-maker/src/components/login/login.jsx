import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
	const onLogin = (event) => {
		authService.login(event.currentTarget.textContent);
	};
	return (
		<section className={styles.login}>
			<Header />
			<section>
				<h1 className={styles.title}>Login</h1>
				<ul className={styles.list}>
					<li className={styles.items}>
						<button className={styles.button} onClick={onLogin}>
							Google
						</button>
					</li>
					<li className={styles.items}>
						<button className={styles.button} onClick={onLogin}>
							Github
						</button>
					</li>
				</ul>
			</section>
			<Footer />
		</section>
	);
};

export default Login;
