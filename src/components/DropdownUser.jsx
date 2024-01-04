import Dropdown from "react-bootstrap/Dropdown";

function DropdownUser() {
	return (
		<Dropdown align="end">
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
			</Dropdown.Toggle>
			<Dropdown.Menu className="me-2">
				<Dropdown.Item href="#">Profilo</Dropdown.Item>
				<Dropdown.Item href="#">Settings action</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item
					className="text-secondary"
					href="#"
				>
					Log Out
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}

export default DropdownUser;
