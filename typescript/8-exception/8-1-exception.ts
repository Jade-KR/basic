// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000);
// 예상가능한 문제 : error VS 예상하지 못한 문제 : exception
// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
	if (fileName === "not exist!💩") {
		// 가능하면 에러의 이유와 정보를 담아주는 것이 좋다
		throw new Error(`file not exist! ${fileName}`);
	}
	return "file contents🗒";
}

function closeFile(fileName: string) {
	//
}
function run() {
	const fileName = "not exist!💩";

	try {
		console.log(readFile(fileName));
	} catch (error) {
		console.log(`catched!!`);
		return;
	} finally {
		// 에러가 발생하지않거나 발생해도 무조건 실행시킨다
		closeFile(fileName);
		console.log(`closed!`);
	}
}
run();
