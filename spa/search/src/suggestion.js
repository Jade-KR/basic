export default function Suggestion({ $target, initialState }) {
	this.$element = document.createElement("div");
	this.$element.className = "Suggestion";
	$target.appendChild(this.$element);

	this.state = {
		selectedIndex: 0,
		initialState,
	};
	this.setState = (nextState) => {
		this.state = nextState;
		this.render();
	};

	this.render = () => {
		const { items = [], selectedIndex } = this.state;
		console.log(selectedIndex);
		if (items.length > 0) {
			this.$element.style.display = "block";
			this.$element.innerHTML = `
          <ul>
              ${items
								.map(
									(item, index) => `
                  <li class="${
										index === selectedIndex ? "Suggestion__item--selected" : ""
									}" data-index="${index}">${item}</li>
              `
								)
								.join("")}
          </ul>
          `;
		} else {
			this.$element.style.display = "none";
			this.$element.innerHTML = "";
		}
	};

	this.render();
}
