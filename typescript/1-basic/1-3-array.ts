{
	// Array
	const fruits: string[] = ["🍎", "🍌"];
	// const scores: Array<number> = [1, 3, 4];

	// 주어진 데이터를 절대 변경할 수 없게 하는 readonly를 작성할때
	// 아래와 같이 작성해야한다. 그러므로 일관성있게 배열을 string[]이런식으로 셋
	function printArray(fruits: readonly string[]) {}

	// 튜플은 서로 다른 타입의 데이터를 담을 수 있다.
	// 데이터에 인덱스처럼 접근하는 것이 너무 가독성이 떨어지기 때문에 사용을 피하자
	// Tuple -> interface, type alias, class 로 대체하여 사용
	let student: [string, number];
	student = ["name", 123];
	student[0]; // name
	student[1]; // 123

	// object destructuring을 사용하면 튜블의 값을 명확하게 받을 수 있긴 하다.
	// 리액트에서 useState의 리턴 값을 튜플로 잘 활용한 사례다.
	const [name, age] = student;
}
