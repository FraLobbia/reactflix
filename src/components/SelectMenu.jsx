import { Component } from "react";
import Form from "react-bootstrap/Form";
import generi from "./config/generi.json";
class SelectMenu extends Component {
	render() {
		return (
			<Form.Select aria-label="Genre">
				{/* <option>Genre</option> */}
				{generi.map((genere, index) => {
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
