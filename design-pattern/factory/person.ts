import Factory from "./factory";
export default class Person {
	constructor() {}

	public nationality(type?: string): any {
		// return "안녕하세요";
		return Factory.getInstance(type);
	}
}
