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
	Stack.push("Jade 1");
	Stack.push("Jade 2");
	Stack.push("Jade 3");
	Stack.push("Jade 4");

	while (Stack.size !== 0) {
		console.log(Stack.pop());
	}

	const Stack2 = new StackImpl<number>();
	Stack2.push(1);
	Stack2.push(2);
	Stack2.push(3);
	Stack2.push(4);

	while (Stack2.size !== 0) {
		console.log(Stack2.pop());
	}
}
