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
			console.log("cleaning the machine...🧼");
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
		}

		private preheat(): void {
			console.log("heating up... 🔥");
		}

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots... ☕️`);
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

	// 각각의 기능별로 클래스를 따로 만들어둠
	// 필요한 곳에서 가져다가 쓸 수 있다 (composition)

	// 싸구려 우유 거품기
	class CheapMilkSteamer {
		private steamMilk(): void {
			console.log("Steaming some milk... 🥛");
		}
		makeMilk(cup: CoffeeCup): CoffeeCup {
			this.steamMilk();
			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	// 설탕 제조기
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

	// coupling이 심한 객체다..
	// 항상 싸구려 우유에 사탕을 부숴서 만든 설탕을 사용해야한다 (스스로를 제약)
	// 나중에 다른 steamer나 다른 거품기를 만들었을때 모든 클래스가 업데이트 되어야한다.
	// 그래서 클래스와 클래스간 서로 잘 알고 지내면 좋지않다 (coupling)
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
