import { Component } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

class Gallery extends Component {
	render() {
		return (
			<Carousel className="mt-5 bg-black">
				<Carousel.Item>
					<div className="movie-row">
						<div className="row g-1">
							<div className="col-md-2">
								<img className="img-fluid movie-cover" src="" />
							</div>
							<div className="col-md-2">
								<img className="img-fluid movie-cover" src="" />
							</div>
							<div className="col-md-2">
								<img className="img-fluid movie-cover" src="" />
							</div>
							<div className="col-md-2">
								<img className="img-fluid movie-cover" src="" />
							</div>
							<div className="col-md-2">
								<img className="img-fluid movie-cover" src="" />
							</div>
							<div className="col-md-2">
								<img className="img-fluid movie-cover" src="" />
							</div>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="movie-row">
						<div className="row g-1">
							<div className="col-md-2">
								<img className="img-fluid movie-cover" src="" />
							</div>
							<div className="col-md-2">
								<img className="img-fluid movie-cover" src="" />
							</div>
							<div className="col-md-2">
								<img className="img-fluid movie-cover" src="" />
							</div>
							<div className="col-md-2">
								<img className="img-fluid movie-cover" src="" />
							</div>
							<div className="col-md-2">
								<img className="img-fluid movie-cover" src="" />
							</div>
							<div className="col-md-2">
								<img className="img-fluid movie-cover" src="" />
							</div>
						</div>
					</div>
				</Carousel.Item>
			</Carousel>
		);
	}
}
export default Gallery;
