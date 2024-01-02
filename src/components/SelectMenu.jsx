import { Component } from "react";
import generi from "./config/generi.json";
import { Form } from "react-bootstrap";

class SelectMenu extends Component {
	render() {
		return (
			<Form.Select
				aria-label="Genre"
				className=" bg-black text-white ms-md-3"
				style={{ width: "200px" }}
			>
				{generi.map((genere) => {
					return (
						<option key={genere.name} value={genere.name}>
							{genere.name}
						</option>
					);
				})}
			</Form.Select>
		);
	}
}

export default SelectMenu;
