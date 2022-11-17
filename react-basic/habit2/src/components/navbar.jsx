import React, { PureComponent } from "react";

class Navbar extends PureComponent {
	render() {
		return <div>Habit Tracker! ({this.props.habitsCount})</div>;
	}
}

export default Navbar;
