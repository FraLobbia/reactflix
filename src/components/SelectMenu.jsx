import { Component } from "react";
import generi from "./config/generi.json";
import { Form } from "react-bootstrap";

class SelectMenu extends Component {
	render() {
		return (
			<Form.Select
				aria-label="Genre"
				className="ms-md-3 border "
				style={{ width: "200px", left: "-100%" }}
			>
				{generi.map((genere) => {
					return (
						<option
							key={genere.name}
							value={genere.name}
						>
							{genere.name}
						</option>
					);
				})}
			</Form.Select>
		);
	}
}

export default SelectMenu;
