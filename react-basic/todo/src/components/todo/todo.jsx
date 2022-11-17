import React, { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { testContext } from "../../context/DarkModeContext";

const Todo = ({ todo, onDelete, onUpdate }) => {
	const handleDelete = () => onDelete(todo);

	const handleChange = (e) => {
		const status = e.target.checked ? "completed" : "active";
		onUpdate({ ...todo, status });
	};

	const { test, toggleTest } = useContext(testContext);

	const testHandle = () => {
		toggleTest();
	};

	return (
		<li>
			<input
				type="checkbox"
				id={todo.id}
				checked={todo.status === "completed"}
				onChange={handleChange}
			/>
			<label htmlFor={todo.id}>{todo.text}</label>
			<button onClick={handleDelete}>
				<FaTrashAlt />
			</button>

			<button onClick={testHandle}>클릭</button>
		</li>
	);
};

export default Todo;
