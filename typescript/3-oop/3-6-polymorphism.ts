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
		private steamMilk(): void {
			console.log("Steaming some milk... π₯");
		}
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			this.steamMilk();
			return {
				...coffee,
				hasMilk: true,
			};
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		makeCoffee(shots: number): CoffeeCup {
			const coffee = super.makeCoffee(shots);
			return {
				...coffee,
				hasSugar: true,
			};
		}
	}

	// λ€νμ±μ μ₯μ 
	// λ΄λΆμ μΌλ‘ κ΅¬νλ λ€μν ν΄λμ€λ€μ΄ νκ°μ§ μΈν°νμ΄μ€λ₯Ό κ΅¬ννκ±°λ
	// λμΌν λΆλͺ¨ ν΄λμ€λ₯Ό μμνμ λ, λμΌν ν¨μλ₯Ό μ΄λ€ ν΄λμ€μΈμ§ κ΅¬λΆνμ§μκ³ 
	// κ³΅ν΅λ apiλ₯Ό νΈμΆν μ μλκ²μ΄ ν° μ₯μ μ΄λ€

	const machines: CoffeeMaker[] = [
		new CoffeeMachine(16),
		new CaffeLatteMachine(16, "1"),
		new SweetCoffeeMaker(16),
		new CoffeeMachine(16),
		new CaffeLatteMachine(16, "1"),
		new SweetCoffeeMaker(16),
	];
	machines.forEach((machine) => {
		console.log("-------------------------");
		machine.makeCoffee(1);
	});
}
