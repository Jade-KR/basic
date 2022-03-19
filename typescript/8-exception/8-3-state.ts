{
	type NetworkErrorState = {
		result: "fail"; // discriminated union
		reason: "offline" | "down" | "timeout";
	};

	type SuccessState = {
		result: "success"; // discriminated union
	};

	// Union type
	type ResultState = SuccessState | NetworkErrorState;
	class NetworkClient {
		tryConnect(): ResultState {
			return {
				result: "success",
			};
		}
	}

	class UserService {
		constructor(private client: NetworkClient) {}

		login() {
			this.client.tryConnect();
		}
	}

	class App {
		constructor(private userService: UserService) {}
		run() {
			try {
				this.userService.login();
			} catch (error) {
				// 여기서 error는 타입이 any로 들어오기 때문에 세부적인 에러처리가 힘들다
				// show dialog to use
			}
		}
	}

	const client = new NetworkClient();
	const service = new UserService(client);
	const app = new App(service);
	app.run();
}
