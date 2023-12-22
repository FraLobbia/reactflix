import { Component } from "react";
import SelectMenu from "./SelectMenu";
import { Container } from "react-bootstrap";

class ActionBar extends Component {
	render() {
		return (
			<Container fluid bg="black" data-bs-theme="dark">
				<h1>TV shows</h1>
				<SelectMenu />
			</Container>
		);
	}
}

export default ActionBar;
