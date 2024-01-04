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
				{/* da sistemare direzione dropdown */}
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item href="#/action-1">Profilo</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Settings action</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item
					className="text-secondary"
					href="#/action-3"
				>
					Log Out
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}

export default DropdownUser;
