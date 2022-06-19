const customerRepository = new CustomerRepository();

const order = new Order(
	data.number,
	customerRepository.registerCustomer(data.customerId, "jade")
);
class Order {
	constructor(number, customer) {
		this._number = data.number;
		this._customer = customer;
	}

	get customer() {
		return this._customer;
	}
}

class Customer {
	constructor(id, name) {
		this._id = id;
		this._name = name;
	}

	get id() {
		return this._id;
	}
}

class CustomerRepository {
	#customers;

	constructor() {
		this.#customers = new Map();
	}

	registerCustomer(id, name) {
		if (!this.#customers.has(id)) {
			this.#customers.set(id, new Customer(id, name));
		}
		return this.findCustomer(id);
	}

	findCustomer(id) {
		return this.#customers.get(id);
	}
}
