{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	interface MilkFrother {
		makeMilk(cup: CoffeeCup): CoffeeCup;
	}

	interface SugarProvider {
		addSugar(cup: CoffeeCup): CoffeeCup;
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

	// 싸구려 우유 거품기
	class CheapMilkSteamer implements MilkFrother {
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

	// 좋은 우유 거품기
	class FancyMilkSteamer implements MilkFrother {
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

	// 차가운 우유 거품기
	class ColdMilkSteamer implements MilkFrother {
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
	class CandySugarMixer implements SugarProvider {
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

	// 일반 설탕 제조기
	class SugarMixer implements SugarProvider {
		private getSugar() {
			console.log("Getting some sugar from jar");
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
			private milkFrother: MilkFrother
		) {
			super(beans);
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.milkFrother.makeMilk(coffee);
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		// 클래스를 사용하는 곳에서 클래스를 받아오는 것이 아닌 Interface를 받아온다
		constructor(private beans: number, private sugar: SugarProvider) {
			super(beans);
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.sugar.addSugar(coffee);
		}
	}

	// interface를 통해서 decoupling을 했다!
	class SweetCaffeLatteMachine extends CoffeeMachine {
		constructor(
			// 클래스들 사이에 서로 상호작용을 하는 경우, 클래스 자신을 노출하지 않고
			// 계약서(interface)를 통해서 서로 소통해야한다.
			private beans: number,
			private milk: MilkFrother,
			private sugar: SugarProvider
		) {
			super(beans);
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			const sugarAdded = this.sugar.addSugar(coffee);
			return this.milk.makeMilk(sugarAdded);
		}
	}

	// 재사용성이 떨어지는 문제가 있어서 해결해야한다.

	// Milk
	const cheapMilkMaker = new CheapMilkSteamer();
	const fancyMilkMaker = new FancyMilkSteamer();
	const coldMilkMaker = new ColdMilkSteamer();

	// Sugar
	const candySugar = new CandySugarMixer();
	const sugar = new SugarMixer();

	const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
	const sweetMachine = new SweetCoffeeMaker(12, sugar);

	const latteMachine = new CaffeLatteMachine(12, "SS", cheapMilkMaker);
	const coldLatteMachine = new CaffeLatteMachine(12, "SS", coldMilkMaker);
	const sweetLatteMachine = new SweetCaffeLatteMachine(
		12,
		cheapMilkMaker,
		candySugar
	);
}
