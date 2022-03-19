const express = require("express");
const path = require("path");

// express 사용
const app = express();
console.log(express.static(path.resolve(__dirname, "front")));
// app.use(express.static(__dirname + "/front"));
app.use("/static", express.static(path.resolve(__dirname, "front")));

app.get("/*", (req, res) => {
	res.sendFile(path.resolve("front", "index.html"));
});

// port 생성 서버 실행
app.listen(8080, () => console.log("Server running ...."));
