export default function Combine({ $target, words }) {
	this.$element = document.createElement("div");
	this.$element.className = "word_table";
	$target.appendChild(this.$element);
	this.state = {
		idx: 0,
	};

	this.setState = (nextState) => {
		this.state = nextState;
		this.render();
	};

	this.render = () => {
		let { idx } = this.state;
		console.log(this.state);
		this.$element.innerHTML = `
		<div class="word_wrap">
    ${words[idx]
			.map(
				(morpheme) => `
      <div class="word">${morpheme}</div>
    `
			)
			.join("<div class='plus'>+</div>")}
			</div>
		<div class="btn_wrap">
			<button class="prev_btn">prev</button>
			<button class="random_btn">random</button>
			<button class="next_btn">next</button>
		</div>
		<div class="complete_word_wrap">
				<div class="complete_word">${Hangul.assemble(words[idx])}</div>
		</div>
		<button class="voice_btn">listen</button>
		<audio class="voice" src=""></audio>
		`;
	};

	this.render();

	this.$element.addEventListener("click", async (e) => {
		if (e.target.tagName === "BUTTON") {
			if (e.target.className === "next_btn") {
				let num = (this.state.idx + 1) % words.length;
				this.setState({ idx: num });
			} else if (e.target.className === "prev_btn") {
				let num =
					this.state.idx - 1 < 0 ? words.length - 1 : this.state.idx - 1;
				this.setState({ idx: num });
			} else if (e.target.className === "random_btn") {
				const num = Math.floor(Math.random() * words.length - 1);
				this.setState({ idx: num });
			} else {
				try {
					const a = document.querySelector(".complete_word");
					const res = await fetch(
						"https://kakaoi-newtone-openapi.kakao.com/v1/synthesize",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/xml",
								Authorization: `KakaoAK 6b085b9d59577dc3cf5e7531ea9f7eda`,
							},
							body: `<speak>
							<voice name="WOMAN_DIALOG_BRIGHT">${a.innerHTML}</voice>
							</speak>
							`,
							responseType: "arraybuffer",
						}
					);
					if (res.ok) {
						const blob = await res.blob();
						const audio = document.querySelector(".voice");
						audio.src = URL.createObjectURL(blob);
						audio.play();
					} else {
						throw new Error("api 통신 실패");
					}
				} catch (e) {
					alert(e.message);
				}
			}
		}
	});

	window.addEventListener("keydown", (e) => {
		if (e.code === "ArrowLeft") {
			let num = this.state.idx - 1 < 0 ? words.length - 1 : this.state.idx - 1;
			this.setState({ idx: num });
		} else if (e.code === "ArrowRight") {
			let num = (this.state.idx + 1) % words.length;
			this.setState({ idx: num });
		} else if (e.code === "Space") {
			const num = Math.floor(Math.random() * words.length - 1);
			this.setState({ idx: num });
		}
	});
}
