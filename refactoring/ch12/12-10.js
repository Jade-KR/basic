class Printer {
	print() {
		console.log("기본 출력");
	}
}

class Network {
  send();
}

class RedPrinter extends Printer {
	print() {
		console.log("빨간색 출력");
	}
}

const printers = [new Printer(), new RedPrinter()];
printers.forEach((printer) => printer.print());
