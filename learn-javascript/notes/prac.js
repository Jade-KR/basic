function solution(n) {
	const arr = [1, 2, 7];
	let result = 1;
	for (let i = 0; i < n - 1; i++) {
		let k = i % 3;
		result += arr[k];
	}
	return String(result);
}

console.log(solution(10));
