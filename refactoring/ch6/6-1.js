export function printOwing(invoice) {
	printBanner();
	let outstanding = calculateOutstanding(invoice);
	recordDueDate(invoice);
	printDetails(invoice, outstanding);
}

function printBanner() {
	console.log("***********************");
	console.log("**** Customer Owes ****");
	console.log("***********************");
}

// 함수에서 반환하기 위한 변수라면 보통 result를 사용한다.
function calculateOutstanding(invoice) {
	return invoice.orders.reduce((acc, order) => acc + order.amount, 0);
	// let result = 0;
	// for (const o of invoice.orders) {
	// 	result += o.amount;
	// }
	// return result;
}

function recordDueDate(invoice) {
	const today = new Date();
	invoice.dueDate = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() + 30
	);
}

function printDetails(invoice, outstanding) {
	console.log(`name: ${invoice.customer}`);
	console.log(`amount: ${outstanding}`);
	console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
	orders: [{ amount: 2 }, { amount: 5 }],
	customer: "엘리",
};
printOwing(invoice);
