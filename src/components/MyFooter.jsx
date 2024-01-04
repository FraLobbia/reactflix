import { Button, Col, Container, Row } from "react-bootstrap";
import footerLinks from "./config/footerLinks.json";
import { Suspense } from "react";
function MyFooter() {
	return (
		<Container style={{ maxWidth: "800px" }}>
			<Row>
				<Col xs={12}>
					<div className="text-secondary">
						<i className="bi bi-facebook pe-2"></i>
						<i className="bi bi-instagram pe-2"></i>
						<i className="bi bi-twitter pe-2"></i>
						<i className="bi bi-youtube pe-2"></i>
					</div>
				</Col>

				{footerLinks.map((footerItem, index) => {
					return (
						<Col
							xs={6}
							md={3}
						>
							<Button
								variant="link"
								className="text-decoration-none text-secondary p-0"
								href={footerItem.link}
								key={`footerItem-${index}`}
							>
								{footerItem.name}
							</Button>
						</Col>
					);
				})}
			</Row>

			<Button
				variant="outline-light"
				className="mt-3"
			>
				Service Code
			</Button>

			<div className="mt-3">
				<p className=" text-secondary">&copy; 1997-2019 Netflix Inc.</p>
			</div>
		</Container>
	);
}

export default MyFooter;
