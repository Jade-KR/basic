{
	class TimeoutError extends Error {}
	class OfflineError extends Error {}

	class NetworkClient {
		tryConnect(): void {
			throw new OfflineError("no network!");
		}
	}

	// 에러를 잡았을 때 무엇인가 처리를 할 수 있는게 없다면 에러처리를 안하는게 낫다
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
				// show dialog to use
			}
		}
	}

	const client = new NetworkClient();
	const service = new UserService(client);
	const app = new App(service);
	app.run();
}
