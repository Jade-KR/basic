interface Component {
	product(): string;
	price(): number;
}

class ConcretComponent implements Component {
	product(): string {
		return "블라우스";
	}

	price(): number {
		return 20000;
	}
}

class ConcretDecorator implements Component {
	constructor(private base: Component) {
		console.log("i7가 생성되었습니다.");
	}

	product() {
		const base = this.base.product();
		return `${base}, i7`;
	}
	price() {
		return this.base.price() + 475000;
	}
}

class ConcretDecorator2 implements Component {
	constructor(private base: Component) {
		console.log("ssd256가 생성되었습니다.");
	}

	product() {
		const base = this.base.product();
		return `${base}, ssd256`;
	}
	price() {
		return this.base.price() + 110000;
	}
}

/**
 * 판매되는 상품이 많아질수록 생성되는 컴포넌트의 클래스의 수가 증가하게된다.
 *
 */

const p = new ConcretComponent();

let spec = new ConcretDecorator(p);
let spec2 = new ConcretDecorator2(spec);

console.log(spec2.product());
console.log(spec2.price());
