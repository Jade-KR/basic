{
	// Type Assertions π© μ¬μ©νμ§ μλ κ²μ΄ μ’λ€..
	// νμ μΊμ€ν

	function jsStrFunc(): any {
		return 2;
	}

	const result = jsStrFunc();
	// return κ°μ΄ numberμΈλ° stringμ length ν¨μλ₯Ό μ¬μ©ν΄λ μλ¬κ° μλ€.
	console.log((result as string).length);
	console.log((<string>result).length);

	const wrong: any = 5;
	console.log((wrong as Array<number>).push(1));

	function findNumbers(): number[] | undefined {
		return undefined;
	}

	const numbers = findNumbers();
	// ν¨μ optional parameter μ λ€λ₯΄κ² νμ ν  λ μ¬μ©νλ !
	numbers!.push(2); // π±
}
