{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	};

	// 접근제어자
	// public
	// private 어떤 누구도 클래스 외부에서는 접근 불가능
	// protected 클래스를 상속한 자식클래스에서만 접근이 가능함
	class CoffeeMaker {
		private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
		private coffeeBeans: number = 0; // instance (object) level

		private constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		/* 
    1. 오브젝트의 생성 주기를 효율적으로 관리
    말씀 하신 싱글톤 패턴이나, 생성 할 수 있는 인스턴스의 갯수 제한, 등
    여러가지를 컨트롤 할 수 있어요

    2. 인스턴스를 만드는 로직을 캡슐화
    인스턴스를 생성하는데 복잡한 로직이 추가 된다면, 
    static 함수를 통해 이런 복잡성을 심플하게 만들 수 있어요.
    Car.createBlueCar();
    Car.createYellowCar();
    이런식으로, 사용하는 사람은 정확하게 어떻게 만드는 지 몰라도, 
    함수 하나로 BlueCar, YellowCar을 만들 수 있죠
    */
		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		fillCoffeeBeans(beans: number) {
			if (beans < 0) {
				throw new Error("value for beans should be greater than 0");
			}
			this.coffeeBeans += beans;
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

	const maker = CoffeeMaker.makeMachine(32);
	maker.fillCoffeeBeans(32);

	class User {
		// get을 사용하면 호출할때 함수처럼() 부르는 것이 아니라,
		// 멤버 변수에 접근하듯이 호출해야한다. (user.fullName)
		// 어떠한 계산을 해야할 때 유용하게 쓸 수 있다.
		get fullName(): string {
			return `${this.firstName} ${this.lastName}`;
		}
		protected internalAge = 4;
		get age(): number {
			return this.internalAge;
		}
		set age(num: number) {
			if (num < 0) {
			}
			this.internalAge = num;
		}
		// 키워드와 멤버변수를 위에서 작성하고 this.멤버변수 이런식으로 할 필요없이,
		// 아래와 같이 인자에 접근제어자를 넣어 작성하면 멤버 변수로 바로 등록된다.
		constructor(private firstName: string, public lastName: string) {}
	}
	const user = new User("Steve", "Jobs");
	user.age = 6;
	console.log(user);

	class User2 extends User {
		changeInternalAge(age: number) {
			this.internalAge = age;
		}
	}

	const user2 = new User2("Jade", "Kim");
	user2.changeInternalAge(5);
	console.log(user2);
	console.log(user);
}
