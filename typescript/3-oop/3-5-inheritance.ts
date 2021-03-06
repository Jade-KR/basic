{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
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
			console.log("cleaning the machine...π§Ό");
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
		}

		private preheat(): void {
			console.log("heating up... π₯");
		}

		private extract(shots: number): CoffeeCup {
			console.log(`Pulling ${shots} shots... βοΈ`);
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

	class CaffeLatteMachine extends CoffeeMachine {
		constructor(beans: number, public readonly serialNumber: string) {
			super(beans);
		}
		// μμν΄λμ€μμ μ°μ΄λ λ΄λΆμ  ν¨μ
		private steamMilk(): void {
			console.log("Steaming some milk... π₯");
		}
		// overriding
		makeCoffee(shots: number): CoffeeCup {
			// superλ₯Ό μ¬μ©νλ©΄ μμνλ λΆλͺ¨μμλ κ²μ μ¬μ©ν  μ μλ€.
			const coffee = super.makeCoffee(shots);
			this.steamMilk();
			return {
				...coffee,
				hasMilk: true,
			};
		}
	}

	const machine = new CoffeeMachine(23);
	const latteMachine = new CaffeLatteMachine(23, "SSSS");
	const coffee = latteMachine.makeCoffee(1);
	console.log(coffee);
	console.log(latteMachine.serialNumber);
}
