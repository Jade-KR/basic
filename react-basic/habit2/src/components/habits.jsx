import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
	render() {
		return (
			<div className="habits">
				<HabitAddForm onSubmit={this.props.onSubmit}></HabitAddForm>
				<ul>
					{this.props.habits.map((habit) => (
						<Habit
							key={habit.id}
							habit={habit}
							onIncrement={this.props.onIncrement}
							onDecrement={this.props.onDecrement}
							onDelete={this.props.onDelete}
						></Habit>
					))}
				</ul>
				<button className="reset-btn" onClick={this.props.onReset}>
					Reset all
				</button>
			</div>
		);
	}
}

export default Habits;
