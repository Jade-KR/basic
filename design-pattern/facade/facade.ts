class Package1 {
	constructor() {
		console.log(`${this.constructor.name} 객체가 생성되었습니다.`);
	}

	process() {
		console.log("패키지1 작업을 진행하였습니다.");
	}
}

class Package2 {
	constructor() {
		console.log(`${this.constructor.name} 객체가 생성되었습니다.`);
	}

	process() {
		console.log("패키지2 작업을 진행하였습니다.");
	}
}

class Package3 {
	constructor() {
		console.log(`${this.constructor.name} 객체가 생성되었습니다.`);
	}

	process() {
		console.log("패키지2 작업을 진행하였습니다.");
	}
}

/** 퍼사드 패턴을 사용하지 않을 경우 아래와 같이 모듈 하나하나 알고있어야 실행가능하다 */
const test1 = new Package1();
test1.process();
const test2 = new Package2();
test2.process();
const test3 = new Package3();
test3.process();

/** 퍼사드 패턴을 적용하면 위와같이 모듈들을 전부 알 필요없이 퍼사드만 이용하면 된다. */
class Facade {
	private package1: any;
	private package2: any;
	private package3: any;

	constructor() {
		this.package1 = new Package1();
		this.package2 = new Package2();
		this.package3 = new Package3();
	}

	processAll() {
		this.package1.process();
		this.package2.process();
		this.package3.process();
	}
}

const testAll = new Facade();
testAll.processAll();
