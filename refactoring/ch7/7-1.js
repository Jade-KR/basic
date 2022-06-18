class Academy {
	#name;
	#country;
	constructor(data) {
		this.#name = data.name;
		this.#country = data.country;
	}

	get name() {
		return this.#name;
	}

	set name(value) {
		this.#name = value;
	}

	get country() {
		return this.#country;
	}
}

const organization = new Academy({ name: "Acme Gooseberries", country: "GB" });

organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);
