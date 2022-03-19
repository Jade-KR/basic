{
	// discriminated union (구별되는 union)
	// 조금 더 직관적으로 코드를 작성할 수 있고 가독성도 좋다

	// function: login -> success, fail
	type SuccessState = {
		result: "success";
		response: {
			body: string;
		};
	};

	type FailState = {
		result: "fail";
		reason: string;
	};

	type LoginState = SuccessState | FailState;
	function login(): LoginState {
		return {
			result: "success",
			response: {
				body: "logged in!",
			},
		};
	}

	// printLoginState(state: LoginState)
	// success -> 🎉 body
	// fail -> 😭 reason

	function printLoginState(state: LoginState) {
		if (state.result === "success") {
			console.log(`🎉 ${state.response.body}`);
		} else {
			console.log(`😭 ${state.reason}`);
		}
	}
}
