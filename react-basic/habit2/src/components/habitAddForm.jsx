import React, { memo } from "react";

const HabitAddForm = memo((props) => {
	const inputRef = React.createRef();
	const submitHandler = (event) => {
		event.preventDefault();
		const name = inputRef.current.value;
		name && props.onSubmit(name);
		inputRef.current.value = "";
	};

	return (
		<form onSubmit={submitHandler}>
			<input
				ref={inputRef}
				type="text"
				className="addInput"
				placeholder="Fill your habit"
			/>
			<button className="addHabit">Add</button>
		</form>
	);
});

export default HabitAddForm;
