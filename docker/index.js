const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Docker practice by Jade");
});

app.listen(8080, () => console.log("service is running"));
