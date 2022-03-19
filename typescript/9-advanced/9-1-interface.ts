{
	/*
  inteface는?
  어떤 것의 규격사항. 서로 간의 약속을 할 수 있는 계약서와 같다
  규격을 통해서 구현을 해야한다면 interface를 사용해야한다.

  type은?
  데이터를 담을 때 어떠한 데이터를 담을 수 있을지 타입을 결정하는 것
  */

	type PositionType = {
		x: number;
		y: number;
	};

	interface PositionInterface {
		x: number;
		y: number;
	}

	// object
	const obj1: PositionType = {
		x: 1,
		y: 1,
	};
	const obj2: PositionInterface = {
		x: 1,
		y: 1,
		z: 1,
	};

	// class
	class Pos1 implements PositionType {
		x: number;
		y: number;
	}
	class Pos2 implements PositionInterface {
		x: number;
		y: number;
		z: number;
	}

	// Extends
	interface ZPositionInterface extends PositionInterface {
		z: number;
	}
	type ZPositionType = PositionType & { z: number };

	// Only interfaces can be merged.
	interface PositionInterface {
		z: number;
	}

	// aliases can use computed properties
	type Person = {
		name: string;
		age: number;
	};
	type Name = Person["name"]; // string

	type NumberType = number;
	type Direction = "left" | "right";
}
