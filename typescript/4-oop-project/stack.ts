interface Stack {
	readonly size: number;
	push(value: string): void;
	pop(): string;
}

type StackNode = {
	value: string;
	next?: StackNode;
};

class StackImpl implements Stack {
	// 내부에서만 쓰이는 변수
	private _size: number = 0;
	private head?: StackNode;

	get size() {
		return this._size;
	}

	push(value: string) {
		const node: StackNode = { value, next: this.head };
		this.head = node;
		this._size++;
	}

	pop(): string {
		const node = this.head;
		if (node == null) {
			throw Error("Stack is empty!");
		}
		const data = node.value;
		this.head = node.next;
		this._size--;
		return data;
	}
}

const Stack = new StackImpl();
Stack.push("Jade 1");
Stack.push("Jade 2");
Stack.push("Jade 3");
Stack.push("Jade 4");

while (Stack.size !== 0) {
	console.log(Stack.pop());
}
