import { Container } from "react-bootstrap";

function MyFooter() {
	return (
		<footer className="mt-5">
			<Container fluid className="text-left text-light p-3">
				<footer className="container-fluid mt-5 d-flex flex-column align-items-center text-secondary">
					<div className="d-flex flex-column">
						<div className="">
							<i className="bi bi-facebook pe-2"></i>
							<i className="bi bi-instagram pe-2"></i>
							<i className="bi bi-twitter pe-2"></i>
							<i className="bi bi-youtube pe-2"></i>
						</div>
						<div className="d-flex flex-wrap mt-2">
							<div className="pe-5">
								<ul className="p-0">
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Audio and Subtitles
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Media Center
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Privacy
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Contact Us
										</a>
									</li>
								</ul>
							</div>
							<div className="pe-5">
								<ul className="p-0">
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Audio Description
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Investor Relations
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Legal Notices
										</a>
									</li>
								</ul>
							</div>
							<div className="pe-5">
								<ul className="p-0">
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Help Center
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Jobs
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Cookie Preferences
										</a>
									</li>
								</ul>
							</div>
							<div className="pe-5">
								<ul className="p-0">
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Gift Cards
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Terms of Use
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-decoration-none text-secondary"
										>
											Corporate Information
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="pe-5 mt-3">
							<span className="border border-2 border-secondary p-2">
								Service code
							</span>
						</div>
						<div className="mt-3">
							<p>&copy; 1997-2019 Netflix Inc.</p>
						</div>
					</div>
				</footer>
			</Container>
		</footer>
	);
}

export default MyFooter;
