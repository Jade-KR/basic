{
	// Union Types: OR
	// 발생할 수 있는 모든 케이스 중에 하나 사용할 수 있도록 강제함
	type Direction = "left" | "right" | "up" | "down";
	function move(direction: Direction) {
		console.log(direction);
	}
	// move 함수를 사용하려고 하면 가능한 모든 인자를 볼 수 있다
	move("down");

	type TileSize = 8 | 16 | 32;
	const tile: TileSize = 16;

	// union type 예제
	// function: login -> success, fail
	type SuccessState = {
		response: {
			body: string;
		};
	};

	type FailState = {
		reason: string;
	};

	type LoginState = SuccessState | FailState;
	function login(id: string, password: string): LoginState {
		return {
			response: {
				body: "logged in!",
			},
		};
	}

	// printLoginState(state: LoginState)
	// success -> 🎉 body
	// fail -> 😭 reason

	function printLoginState(state: LoginState) {
		// 이 코드를 작성하는 시점에서 Success인지 Fail인지 모르기 때문에
		// state.reason , state.response 이런식으로 작성할 수 없다
		// 그래서 아래와 같이 작성 하기도 하는데 좋지않다
		if ("response" in state) {
			console.log(`🎉 ${state.response.body}`);
		} else {
			console.log(`😭 ${state.reason}`);
		}

		// 그래서 어떻게 작성하는게 좋은가?
		// 바로 discriminated union을 사용한다!
	}
}
