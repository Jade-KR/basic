{
	interface Stack<T> {
		readonly size: number;
		push(value: T): void;
		pop(): T;
	}

	type StackNode<T> = {
		value: T;
		next?: StackNode<T>;
	};

	class StackImpl<T> implements Stack<T> {
		// 내부에서만 쓰이는 변수
		private _size: number = 0;
		private head?: StackNode<T>;

		get size() {
			return this._size;
		}

		push(value: T) {
			const node: StackNode<T> = { value, next: this.head };
			this.head = node;
			this._size++;
		}

		pop(): T {
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

	const Stack = new StackImpl<string>();
	Stack.push("hello1");
	Stack.push("hello2");
	Stack.push("hello3");
	Stack.push("hello4");

	const StackNum = new StackImpl<number>();
	StackNum.push(1);
	StackNum.push(2);
	StackNum.push(3);
	StackNum.push(4);

	while (Stack.size !== 0) {
		console.log(Stack.pop());
	}
}
