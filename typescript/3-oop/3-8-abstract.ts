{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): CoffeeCup;
	}

	// 상속받아 오버라이딩 할 때 부모의 기능을 사용안하는 것을 방지하기 위해 abstract 사용
	// abstract 클래스는 인스턴스를 생성할 수 없다.
	abstract class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
		private coffeeBeans: number = 0; // instance (object) level

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
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

		// 구현사항은 작성하지 않는다
		protected abstract extract(shots: number): CoffeeCup;

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
			console.log("Steaming some milk... 🥛");
		}

		protected extract(shots: number): CoffeeCup {
			this.steamMilk();
			return {
				shots,
				hasMilk: true,
			};
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		protected extract(shots: number): CoffeeCup {
			return {
				shots,
				hasSugar: true,
			};
		}
	}

	const machines: CoffeeMaker[] = [
		new CaffeLatteMachine(16, "1"),
		new SweetCoffeeMaker(16),
		new CaffeLatteMachine(16, "1"),
		new SweetCoffeeMaker(16),
	];
	machines.forEach((machine) => {
		console.log("-------------------------");
		machine.makeCoffee(1);
	});
}
