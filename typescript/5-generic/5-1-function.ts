{
	// ð©
	function checkNotNullBad(arg: number | null): number {
		if (arg == null) {
			throw new Error("not valid number!");
		}
		return arg;
	}

	// Typeì´ ë³´ì¥ëì§ ìëë¤ ð©
	function checkNotNullAnyBad(arg: any | null): any {
		if (arg == null) {
			throw new Error("not valid number!");
		}
		return arg;
	}
	const result = checkNotNullAnyBad(123);

	// ì ë¤ë¦­ì ì¬ì©íë©´ ì´ í¨ìë¥¼ ì¬ì©í  ë íìì´ ì í´ì§ë¤
	// <T> : ì ë¤ë¦­ì ì¬ì©íëêµ¬ë.. T : íìì´ T ì´ê³  ë¦¬í´ì´ T íìì´êµ¬ë
	function checkNotNull<T>(arg: T | null): T {
		if (arg == null) {
			throw new Error("not valid number!");
		}
		return arg;
	}
	const number = checkNotNull(123);
	const boal: boolean = checkNotNull(true);
}
