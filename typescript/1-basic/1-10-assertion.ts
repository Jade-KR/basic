{
	// Type Assertions 💩 사용하지 않는 것이 좋다..
	// 타입 캐스팅

	function jsStrFunc(): any {
		return 2;
	}

	const result = jsStrFunc();
	// return 값이 number인데 string의 length 함수를 사용해도 에러가 없다.
	console.log((result as string).length);
	console.log((<string>result).length);

	const wrong: any = 5;
	console.log((wrong as Array<number>).push(1));

	function findNumbers(): number[] | undefined {
		return undefined;
	}

	const numbers = findNumbers();
	// 함수 optional parameter 와 다르게 확신할 때 사용하는 !
	numbers!.push(2); // 😱
}
