// 프로토타입은 상속을 위해서 만들어졌다 (재사용)

const x = {};
const y = {};
// 자바스크립트에서 모든 오브젝트는 Object라는 __proto__를 가지고있다.
console.log(x);
console.log(y);
console.log(x.toString());
// 동일한 오브젝트인 __proto__를 상속하고있다.
console.log(x.__proto__ === y.__proto__);

const array = [];
// Array 라는 __proto__를 가지고있다
// Array 라는 __proto__ 안에는 Object라는 __proto__를 가지고있다.
// => array 는 Array를 상속하고 Array는 Object를 상속한다.
console.log(array);

console.clear();

function CoffeeMachine(beans) {
	this.beans = beans;
	// Instance member level
	/* this.makeCoffee = shots => {
    console.log('making... ☕️');
  }; */
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
	console.log("making... ☕️");
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
	this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
