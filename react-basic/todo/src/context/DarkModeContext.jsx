import { createContext, useState } from "react";

// export const DarkModeContext = createContext();

// export function DarkModeProvider({ children }) {
// 	const [darkMode, setDarkMode] = useState(false);
// 	const toggleDarkMode = () => {
// 		setDarkMode((prev) => !prev);
// 	};
// 	return (
// 		<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
// 			{children}
// 		</DarkModeContext.Provider>
// 	);
// }

export const testContext = createContext();

export function TestProvider({ children }) {
	const [test, setTest] = useState(false);
	const toggleTest = () => {
		console.log(test);
		setTest((prev) => !prev);
	};

	return (
		<testContext.Provider value={{ test, toggleTest }}>
			{children}
		</testContext.Provider>
	);
}
