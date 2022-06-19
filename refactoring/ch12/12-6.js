class Employee {
	#name;
	constructor(name) {
		this.#name = name;
	}

	get type() {
		return "employee";
	}

	toString() {
		return `${this.#name} (${this.type})`;
	}
}

class Manager extends Employee {
	get type() {
		return "manager";
	}
}

const ellie = new Manager("엘리", "engineer");
const bob = new Employee("밥", "manager");
console.log(ellie.toString());
