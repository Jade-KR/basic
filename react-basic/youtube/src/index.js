import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";
import Youtube from "./services/youtube";

const key = process.env.REACT_APP_YOUTUBE_KEY;
console.log(key);
const youtube = new Youtube(key);

ReactDOM.render(
	<React.StrictMode>
		<App youtube={youtube}></App>
	</React.StrictMode>,
	document.getElementById("root")
);
