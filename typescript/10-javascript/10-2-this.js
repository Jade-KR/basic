/*
다른 프로그래밍 언어에서는 this는 해당 클래스 자신을 가리킨다.
하.지.만! 자바스크립트에서는 누가 부르냐에 따라 this가 달라진다
호출한 사람의 문맥을 나타냄
*/

// 브라우저 환경에서는 window 가 글로벌 객체
console.log(this); // window

function simpleFunc() {
	console.log(this); // window
}
// 글로벌에서 함수를 호출하는 것은 window에서 호출하는 것과 동일
window.simpleFunc();
console.clear();

class Counter {
	count = 0;
	increase = () => {
		// Counter에서 increase를 호출
		// console.log(this); // Counter
	};
}
const counter = new Counter();
counter.increase();

// counter의 increase 포인터를 caller 변수로 할당했기 때문에 this의 정보를 잃어버림
const caller = counter.increase;
// 한곳으로 object를 묶고 싶다면 bind 함수로연결해야한다.
// 하지만 => 를 이용하면 선언된 당시의 this 문맥을 기억한다.
//const caller = counter.increase.bind(counter);

// let과 const로 선언한 변수는 window에 등록되어있지 않으므로
// caller를 호출하는 것은 어떤 object도 아니기 때문에 undefined
caller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
