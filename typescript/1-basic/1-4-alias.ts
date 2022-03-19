{
	// 타입스크립트가 강력한 이유!

	// Type Alias (새로운 타입을 정의할 수 있다)
	type Text = string;
	const name: Text = "jade";
	const address: Text = "Korea";
	type Num = number;
	type Student = {
		name: string;
		age: number;
	};
	const student: Student = {
		name: "jade",
		age: 12,
	};

	// String Literal Types (타입을 문자열로 지정)
	type Name = "name";
	let jadeName: Name;
	jadeName = "name"; // 동일한 문자열을 써야함
	type JSON = "json";
	const json: JSON = "json";

	type Boal = true;
	const isCat: Boal = true;

	// 값 자체를 type으로 쓰는 이유는? union type 에서 그 효과를 볼 수 있다
}
