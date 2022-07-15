import Korean from "./korean";
import English from "./english";

export default class Factory {
	constructor() {}

	public static getInstance(type?: string): any {
		if (type === "ko") {
			return new Korean();
		} else if (type === "en") {
			return new English();
		}
	}
}
