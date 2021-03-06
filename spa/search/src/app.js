import SearchInput from "./searchInput.js";
import Suggestion from "./suggestion.js";

import { fetchLanguages } from "./api.js";

export default function App({ $target }) {
	this.state = {
		fetchedLanguages: [],
		selectedLanguages: [],
	};

	this.setState = (nextState) => {
		this.state = {
			...this.state,
			...nextState,
		};
		suggestion.setState({
			selectedIndex: 0,
			items: this.state.fetchedLanguages,
		});
	};

	const searchInput = new SearchInput({
		$target,
		initialState: "",
		onChange: async (keyword) => {
			if (keyword.length === 0) {
				this.setState({
					fetchedLanguages: [],
				});
			} else {
				const languages = await fetchLanguages(keyword);
				console.log(this);
				this.setState({
					fetchedLanguages: languages,
				});
			}
		},
	});

	const suggestion = new Suggestion({
		$target,
		initialState: {
			cursor: 0,
			items: [],
		},
	});
}
