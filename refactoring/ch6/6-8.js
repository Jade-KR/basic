export function readingsOutsideRange(station, range) {
	return station.readings.filter((r) => !range.contains(r.temp));
}

class tempRange {
	#min;
	#max;
	constructor(min, max) {
		this.#min = min;
		this.#max = max;
	}

	get min() {
		return this.#min;
	}

	get max() {
		return this.#max;
	}

	contains(temp) {
		return temp >= this.#min && temp <= this.#max;
	}
}

const station = {
	name: "ZB1",
	readings: [
		{ temp: 47, time: "2016-11-10 09:10" },
		{ temp: 53, time: "2016-11-10 09:20" },
		{ temp: 58, time: "2016-11-10 09:30" },
		{ temp: 53, time: "2016-11-10 09:40" },
		{ temp: 51, time: "2016-11-10 09:50" },
	],
};
const operationPlan = new tempRange(51, 53);

console.log(readingsOutsideRange(station, operationPlan));
