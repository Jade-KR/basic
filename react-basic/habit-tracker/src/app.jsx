import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import React, { Component } from "react";
import AddHabit from "./components/addHabit";

class app extends Component {
	state = {
		habits: [
			{ id: 1, name: "Reading", count: 0 },
			{ id: 2, name: "Running", count: 0 },
			{ id: 3, name: "Coding", count: 0 },
		],
	};

	handleIncrement = (habit) => {
		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// habits[index].count++;
		// this.setState({ habits: habits });
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				return { ...habit, count: habit.count + 1 };
			}
			return item;
		});
		this.setState({ habits });
	};

	handleDecrement = (habit) => {
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				const count = habit.count - 1;
				return { ...habit, count: count < 0 ? 0 : count };
			}
			return item;
		});
		this.setState({ habits });
	};

	handleDelete = (habit) => {
		const habits = this.state.habits.filter((item) => item.id !== habit.id);
		// const habits = [...this.state.habits];
		// const index = habits.indexOf(habit);
		// habits.splice(index, 1);
		this.setState({ habits: habits });
	};

	handleAdd = (name) => {
		const habits = [...this.state.habits];
		habits.push({ id: Math.random(4, 100000), name: name, count: 0 });
		this.setState({ habits });
	};

	handleReset = () => {
		const habits = this.state.habits.map((habit) => {
			if (habit.count !== 0) {
				return { ...habit, count: 0 };
			}
			return habit;
		});
		this.setState({ habits });
	};

	render() {
		return (
			<>
				<Navbar
					totalCount={this.state.habits.filter((item) => item.count > 0).length}
				/>
				<AddHabit onAdd={this.handleAdd} />
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onReset={this.handleReset}
				/>
			</>
		);
	}
}

export default app;
