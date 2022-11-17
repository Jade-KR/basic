import TodoList from "./components/todo_list/todo_list";
import Header from "./components/header/header";
import { useState } from "react";
import styles from "./app.module.css";
import { TestProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
function App() {
	const [filter, setFilter] = useState(filters[0]);

	const handleFilter = (filter) => {
		setFilter(filter);
	};
	return (
		<div className={styles.app}>
			<TestProvider>
				<Header
					filters={filters}
					onFilterChange={handleFilter}
					filter={filter}
				/>
				<TodoList filter={filter} />
			</TestProvider>
		</div>
	);
}

export default App;
