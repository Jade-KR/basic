import React, { PureComponent } from "react";

class Habit extends PureComponent {
	render() {
		const { name, count } = this.props.habit;
		return (
			<>
				<span className="habit-name">{name}</span>
				<span className="habit-count">{count}</span>
				<button
					className="habit-button habit-increase"
					onClick={(event) => this.props.onIncrement(this.props.habit)}
				>
					<i class="fa-solid fa-square-plus"></i>
				</button>
				<button
					className="habit-button habit-decrease"
					onClick={(event) => this.props.onDecrement(this.props.habit)}
				>
					<i class="fa-solid fa-square-minus"></i>
				</button>
				<button
					className="habit-button habit-delete"
					onClick={(event) => this.props.onDelete(this.props.habit)}
				>
					<i class="fa-solid fa-trash-can"></i>
				</button>
			</>
		);
	}
}

export default Habit;
