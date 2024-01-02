import { Component } from "react";
import SelectMenu from "./SelectMenu";

import { Button, Container } from "react-bootstrap";

class ActionBar extends Component {
	render() {
		return (
			<Container
				fluid
				className="d-flex flex-column flex-md-row align-items-center py-4"
			>
				<h1>TV shows</h1>
				<SelectMenu />
				<div className="ms-md-auto mt-3 mt-md-0">
					<Button variant="outline-light">
						<i className="bi bi-list  p-1 fs-6"></i>
					</Button>
					<Button variant="outline-light">
						<i className="bi bi-grid-fill  p-1 fs-6"></i>
					</Button>
				</div>
			</Container>
		);
	}
}

export default ActionBar;
