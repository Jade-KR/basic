{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
		private coffeeBeans: number = 0; // instance (object) level

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeeBeans);
		}

		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error("value for beans should be greater than 0");
			}
			this.coffeeBeans += beans;
		}

		clean() {
			console.log("cleaning the machine...๐งผ");
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
		}

		private preheat(): void {
			console.log("heating up... ๐ฅ");
		}

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots... โ๏ธ`);
			return {
				shots,
				hasMilk: false,
			};
		}

		makeCoffee(shots: number): CoffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	// ๊ฐ๊ฐ์ ๊ธฐ๋ฅ๋ณ๋ก ํด๋์ค๋ฅผ ๋ฐ๋ก ๋ง๋ค์ด๋ 
	// ํ์ํ ๊ณณ์์ ๊ฐ์ ธ๋ค๊ฐ ์ธ ์ ์๋ค (composition)

	// ์ธ๊ตฌ๋ ค ์ฐ์  ๊ฑฐํ๊ธฐ
	class CheapMilkSteamer {
		private steamMilk(): void {
			console.log("Steaming some milk... ๐ฅ");
		}
		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk();
			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	// ์คํ ์ ์กฐ๊ธฐ
	class AutomaticSugarMixer {
		private getSugar() {
			console.log("Getting some sugar from candy");
			return true;
		}

		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar();
			return {
				...cup,
				hasSugar: sugar,
			};
		}
	}

	class CaffeLatteMachine extends CoffeeMachine {
		constructor(
			beans: number,
			public readonly serialNumber: string,
			private milkFrother: CheapMilkSteamer
		) {
			super(beans);
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.milkFrother.makeMilk(coffee);
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		constructor(private beans: number, private sugar: AutomaticSugarMixer) {
			super(beans);
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.sugar.addSugar(coffee);
		}
	}

	// coupling์ด ์ฌํ ๊ฐ์ฒด๋ค..
	// ํญ์ ์ธ๊ตฌ๋ ค ์ฐ์ ์ ์ฌํ์ ๋ถ์ด์ ๋ง๋  ์คํ์ ์ฌ์ฉํด์ผํ๋ค (์ค์ค๋ก๋ฅผ ์ ์ฝ)
	// ๋์ค์ ๋ค๋ฅธ steamer๋ ๋ค๋ฅธ ๊ฑฐํ๊ธฐ๋ฅผ ๋ง๋ค์์๋ ๋ชจ๋  ํด๋์ค๊ฐ ์๋ฐ์ดํธ ๋์ด์ผํ๋ค.
	// ๊ทธ๋์ ํด๋์ค์ ํด๋์ค๊ฐ ์๋ก ์ ์๊ณ  ์ง๋ด๋ฉด ์ข์ง์๋ค (coupling)
	class SweetCaffeLatteMachine extends CoffeeMachine {
		constructor(
			private beans: number,
			private sugar: AutomaticSugarMixer,
			private milk: CheapMilkSteamer
		) {
			super(beans);
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			const sugarAdded = this.sugar.addSugar(coffee);
			return this.milk.makeMilk(sugarAdded);
		}
	}
}
