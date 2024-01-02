import Dropdown from "react-bootstrap/Dropdown";

function DropdownUser() {
	return (
		<Dropdown>
			<Dropdown.Toggle
				variant="black"
				id="dropdown-basic"
			>
				<img
					src="https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg"
					style={{ width: "30px" }}
					alt=""
					srcset=""
				/>
				{/* da sistemare direzione dropdown */}
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}

export default DropdownUser;
