import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";

const key = process.env.REACT_APP_FIREBASE_API_KEY;

console.log(key);
const authService = new AuthService();

ReactDOM.render(
	<React.StrictMode>
		<App authService={authService} />
	</React.StrictMode>,
	document.getElementById("root")
);
