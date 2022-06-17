import fs from "fs";

run(process.argv[2]);

// 1. 첫번째 run 함수를 만들어서 테스트성 높이기
function run(args) {
	const command = parseCommandLine(args);
	return countOrders(command);
}

function parseCommandLine(args) {
	if (!args) {
		throw new Error("파일 이름을 입력하세요");
	}

	const fileName = `./${args}.json`;
	if (!fs.existsSync(fileName)) {
		throw new Error("파일이 존재하지 않습니다");
	}

	const countReadyOnly = args.include("-r");

	return {
		fileName,
		countReadyOnly,
	};
}

function countOrders({ fileName, countReadyOnly }) {
	const rawData = fs.readFileSync(fileName);
	const orders = JSON.parse(rawData);
	const filtered = countReadyOnly
		? orders.filter((order) => order.status === "ready").length
		: orders;

	console.log(filtered.length);
}
