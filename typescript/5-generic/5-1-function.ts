{
	// 💩
	function checkNotNullBad(arg: number | null): number {
		if (arg == null) {
			throw new Error("not valid number!");
		}
		return arg;
	}

	// Type이 보장되지 않는다 💩
	function checkNotNullAnyBad(arg: any | null): any {
		if (arg == null) {
			throw new Error("not valid number!");
		}
		return arg;
	}
	const result = checkNotNullAnyBad(123);

	// 제네릭을 사용하면 이 함수를 사용할 때 타입이 정해진다
	// <T> : 제네릭을 사용하는구나.. T : 타입이 T 이고 리턴이 T 타입이구나
	function checkNotNull<T>(arg: T | null): T {
		if (arg == null) {
			throw new Error("not valid number!");
		}
		return arg;
	}
	const number = checkNotNull(123);
	const boal: boolean = checkNotNull(true);
}
