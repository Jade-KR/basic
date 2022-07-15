// 컴포지션(위임)
class Printer {
	#printerHeader;
	constructor(printerDelegate) {
		this.#printerHeader = printerDelegate;
	}

	print() {
		this.#printerHeader
			? this.#printerHeader.print()
			: console.log("기본 출력");
	}
}

class Network {
	send() {}
}

class RedPrinterHeader {
	print() {
		console.log("빨간색 출력");
	}
}

const printers = [new Printer(), new Printer(new RedPrinterHeader())];
printers.forEach((printer) => printer.print());
