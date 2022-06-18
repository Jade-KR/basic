export class Customer {
	#name;
	#contract;
	constructor(name, discountRate) {
		this.#name = name;
		this.#discountRate = discountRate;
		this.#contract = new CustomerContract(this.dateToday(), discountRate);
	}

	becomePreferred() {
		this.contract.#discountRate += 0.03;
		// 다른 코드들이 있음...
	}

	applyDiscount(amount) {
		return amount.subtract(amount.multiply(this.contract.#discountRate));
	}

	dateToday() {
		return new Date();
	}
}

class CustomerContract {
	#startDate;
	#discountRate;
	constructor(startDate) {
		this.#startDate = startDate;
	}
	get discountRate() {
		return this.#discountRate;
	}

	set discountRate(arg) {
		this.#discountRate = arg;
	}
}
