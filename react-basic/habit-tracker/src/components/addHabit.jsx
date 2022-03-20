import React, { memo } from "react";

const AddHabit = memo((props) => {
	const inputRef = React.createRef();
	const onSubmit = (e) => {
		e.preventDefault();
		const name = inputRef.current.value;
		name && props.onAdd(name);
		inputRef.current.value = "";
	};
	return (
		<form className="add-form" onSubmit={onSubmit}>
			<input
				ref={inputRef}
				type="text"
				className="add-input"
				placeholder="Habit"
			/>
			<button className="add-button">Add</button>
		</form>
	);
});

export default AddHabit;
