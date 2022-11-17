import "./app.css";
import Habits from "./components/habits";

import React, { Component } from "react";
import Navbar from "./components/navbar";

class App extends Component {
	state = {
		habits: [
			{ id: 1, name: "Reading", count: 0 },
			{ id: 2, name: "Running", count: 0 },
			{ id: 3, name: "Coding", count: 0 },
		],
	};

	handleIncrement = (habit) => {
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
		const habits = this.state.habits.filter((item) => {
			return item.id !== habit.id;
		});
		this.setState({ habits });
	};

	handleSubmit = (name) => {
		const newHabit = { id: Date.now(), name: name, count: 0 };
		const habits = [...this.state.habits, newHabit];
		this.setState({ habits });
	};

	handleReset = () => {
		const habits = this.state.habits.map((habit) => {
			habit.count = 0;
			return habit;
		});
		this.setState({ habits });
	};

	render() {
		const habitsCount = this.state.habits.filter((v) => v.count > 0).length;
		return (
			<>
				<Navbar habitsCount={habitsCount}></Navbar>
				<Habits
					habits={this.state.habits}
					onIncrement={this.handleIncrement}
					onDecrement={this.handleDecrement}
					onDelete={this.handleDelete}
					onSubmit={this.handleSubmit}
					onReset={this.handleReset}
				></Habits>
			</>
		);
	}
}

export default App;
