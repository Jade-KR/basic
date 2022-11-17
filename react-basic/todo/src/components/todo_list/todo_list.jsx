import React from "react";
import { useState } from "react";
import Todo from "../todo/todo";
import { v4 as uuid4 } from "uuid";
import styles from "./todo_list.module.css";

const TodoList = ({ filter }) => {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 0) {
			const todo = { id: uuid4(), status: "active", text };
			setTodos([...todos, todo]);
			setText("");
		}
	};
	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleDelete = (todo) => {
		const newTodos = todos.filter((t) => t.id !== todo.id);
		setTodos(newTodos);
	};

	const handleUpdate = (todo) => {
		const newTodos = todos.map((t) => {
			if (t.id === todo.id) {
				return todo;
			}
			return t;
		});
		setTodos(newTodos);
	};

	const filtered = getFilteredItems(todos, filter);

	return (
		<section className={styles.todo_list}>
			<ul className={styles.list}>
				{filtered.map((todo) => (
					<Todo
						key={todo.id}
						todo={todo}
						onDelete={handleDelete}
						onUpdate={handleUpdate}
					/>
				))}
			</ul>
			<form onSubmit={handleSubmit} className={styles.add_todo}>
				<input
					type="text"
					placeholder="type your plan"
					onChange={handleChange}
					value={text}
				/>
				<button>Add</button>
			</form>
		</section>
	);
};

export default TodoList;

function getFilteredItems(todos, filter) {
	if (filter === "all") {
		return todos;
	}

	return todos.filter((todo) => todo.status === filter);
}
