/**
 * 자바스크립트에서 모듈이란 파일 안에 코드를 모듈화해서 작성하는 것이다.
 * 한 모듈이라고 하는것은 한 파일안에 작성되어있는 코드를 말한다.
 *
 * 따로 모듈화해서 작성하지 않으면 여러가지 파일들이 있을 때 모든 코드들은 글로벌스코프로 책정된다
 * 규모가 조금이라도 큰 프로젝트를 한다면 모듈화해서 사용해야한다.
 */

// export default 로 내보내면 받는곳에서 이름을 마음대로 변경가능하다
// 그러나 한 파일 내에서 두가지 이상 default를 사용하지 못한다.

// import run, { print as printMessage} from './10-3-moduel1.js'

// export되는 모든 것들을 calculator 라는 이름으로 받아올 때
// import * as calculator from './10-3-moduel1.js'

export function add(a, b) {
	return a + b;
}

export const number = 10;
export function print() {
	console.log("print");
}
