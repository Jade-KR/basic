{
	// Intersection Types: &
	// union과 반대되는 개념!

	type Student = {
		name: string;
		score: number;
	};

	type Worker = {
		employeeId: number;
		work: () => void;
	};

	function internWork(person: Student & Worker) {
		console.log(person.name, person.employeeId, person.work());
	}

	internWork({
		name: "jade",
		score: 1,
		employeeId: 123,
		work: () => {},
	});
}
