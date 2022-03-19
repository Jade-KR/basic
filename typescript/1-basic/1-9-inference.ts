{
	// Type Inference (타입 추론)
	// 타입을 스스로 추론하여 부여해주지만 정확하게 타입을 명시하는 것이 좋다. (특히 함수에서)
	// 프로젝트에서 함수를 작성할 때 함수는 복잡하다.
	// 원시타입 같은 경우는 생략해도 무방하다.
	// 프로젝트할 때 팀과 같이 규칙을 정하자 어떤 것을 타입추론을 할지.

	let text = "hello"; // 타입이 뻔한 경우 스스로 타입을 할당
	function print(message = "hello") {
		console.log(message);
	}

	print("hello");

	// 리턴 값이 추론됨
	function add(x: number, y: number) {
		return x + y;
	}

	// 추론의 추론 result의 타입이 숫자 타입이 됨
	const result = add(1, 2);
}
