export function reportYoungestAgeAndTotalSalary(people) {
	function youngestAge() {
		return Math.min(...people.map((p) => p.age));
	}

	function totalSalary() {
		return people.reduce((acc, p) => acc + p, 0);
	}

	return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;
}
