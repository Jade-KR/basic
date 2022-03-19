{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	class CoffeeMaker {
		// 공통적으로 사용하는 것들을 멤버변수로 두면 메모리 낭비가 된다.
		// 그러므로 static 키워드를 붙여 class level로 만들어준다.
		static BEANS_GRAMM_PER_SHOT: number = 7; // class level
		coffeeBeans: number = 0; // instance (object) level

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		/* 
    생성자를 이용하면 외부에서 만드는 사람이 필요한 클래스를 골라서 
    직접 new로 그리고 그것을 생성하기 위한 모든 인자들에 대해 알아서 제대로 써야 하지만,
    만약 다양한 커피 기계가 있다면, 외부에서 일일이 필요한 기계마다 필요한 인자들을 
    알아서 생성하는것도 일이겠죠?
    이런 생성하는 로직을 잘 감추어 두는 것이 바로 static 생성 함수예요 :)
    아래와 같이 간단한 인터페이스로 새로운 기계를 만들수 있고,
    내부에서 복잡한 new.. 생성의 로직들을 구현하고 있겠죠 🤓
    
    CoffMachine.makeMachine('simple');
    CoffMachine.makeMachine('fancy');
    CoffMachine.makeMachine('yellow');

    클래스 내부에 있는 어떠한 속성값도 필요하지 않기 때문에 static을 붙인다
		그럼 외부에서 클래스를 통해 접근가능해진다
    오브젝트를 생성하지 않고 클래스레벨에서 접근이 가능함 ex) Math.abs
    */
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		makeCoffee(shots: number): CoffeeCup {
			if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
				throw new Error("Not enough coffee beans!");
			}
			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
			return {
				shots,
				hasMilk: false,
			};
		}
	}

	const maker = new CoffeeMaker(32);
	console.log(maker);
	const maker2 = new CoffeeMaker(14);
	console.log(maker2);

	const maker3 = CoffeeMaker.makeMachine(3);
}
