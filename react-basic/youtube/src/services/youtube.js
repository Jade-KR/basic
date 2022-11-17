class Youtube {
	#requestOptions;
	#key;

	constructor(key) {
		this.#requestOptions = {
			method: "GET",
			redirect: "follow",
		};
		this.#key = key;
	}

	mostPopular() {
		return fetch(
			`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${
				this.#key
			}`,
			this.#requestOptions
		)
			.then((response) => response.json())
			.then((result) => result.items);
	}

	search(query) {
		return fetch(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${
				this.#key
			}`,
			this.#requestOptions
		)
			.then((response) => response.json())
			.then((result) =>
				result.items.map((item) => ({ ...item, id: item.id.videoId }))
			);
	}
}

export default Youtube;
