export function priceOrder(product, quantity, shippingMethod) {
	const basePrice = getBasePrice(product, quantity);
	const discount = getDiscount(product, quantity);
	const shippingPerCase = getShippingPerCase(basePrice, shippingMethod);
	const shippingCost = getShippingCost(quantity, shippingPerCase);

	return basePrice - discount + shippingCost;
}

function getBasePrice(product, quantity) {
	return product.basePrice * quantity;
}

function getDiscount(product, quantity) {
	return (
		Math.max(quantity - product.discountThreshold, 0) *
		product.basePrice *
		product.discountRate
	);
}

function getShippingPerCase(basePrice, shippingMethod) {
	return basePrice > shippingMethod.discountThreshold
		? shippingMethod.discountedFee
		: shippingMethod.feePerCase;
}

function getShippingCost(quantity, shippingPerCase) {
	return quantity * shippingPerCase;
}

// 사용 예:
const product = {
	basePrice: 10,
	discountRate: 0.1,
	discountThreshold: 10,
};

const shippingMethod = {
	discountThreshold: 20,
	feePerCase: 5,
	discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
