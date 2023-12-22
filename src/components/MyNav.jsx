import { Nav, Container, Navbar } from "react-bootstrap";

import navBarConfig from "./config/navBarConfig.json";
function MyNav(props) {
	return (
		<Navbar bg="black" data-bs-theme="dark" expand="md">
			<Container fluid className="p-0">
				<Navbar.Brand href="#">
					<img
						src={props.logo}
						className="App-logo"
						alt="logo"
						style={{ height: "50px" }}
					/>
				</Navbar.Brand>
				<Navbar.Toggle className="ms-auto" aria-controls="myNavbar" />

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
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNav;
