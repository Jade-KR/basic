export function payAmount(employee) {
	let result;
	if (employee.isSeparated) {
		return { amount: 0, reasonCode: "SEP" };
	}

	return employee.isRetired
		? { amount: 0, reasonCode: "RET" }
		: someFinalComputation();
}

function someFinalComputation() {
	return { amount: 999, reasonCode: "UNICORN" };
}
