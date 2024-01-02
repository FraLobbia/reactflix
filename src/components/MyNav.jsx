import { Nav, Container, Navbar } from "react-bootstrap";

import navBarConfig from "./config/navBarConfig.json";
import DropdownUser from "./DropdownUser";
function MyNav(props) {
	return (
		<Navbar expand="md">
			<Container
				fluid
				className="p-0"
			>
				<Navbar.Brand href="#">
					<img
						src={props.logo}
						className="App-logo"
						alt="logo"
						style={{ height: "50px" }}
					/>
				</Navbar.Brand>
				<Navbar.Toggle
					className="ms-auto me-2"
					aria-controls="myNavbar"
				/>

				<Navbar.Collapse
					id="myNavbar"
					className="justify-content-between"
				>
					<Nav>
						{navBarConfig.map((navItem, index) => {
							return (
								<Nav.Link
									href={navItem.link}
									key={`navItem-${index}`}
									className="text-white"
								>
									{navItem.name}
								</Nav.Link>
							);
						})}
					</Nav>
					<Nav>
						<Nav.Link
							className="text-white"
							href="#"
						>
							<i className="bi bi-search px-4"></i>
						</Nav.Link>

						<Nav.Link
							className="text-white"
							href="#"
						>
							KIDS
						</Nav.Link>
						<Nav.Link
							className="text-white"
							href="#"
						>
							<i class="bi bi-bell-fill ps-4 pe-2"></i>
						</Nav.Link>
						<DropdownUser />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNav;
