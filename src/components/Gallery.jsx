import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleMovie from "./SingleMovie";
class Gallery extends Component {
	state = {
		data: [],
		isLoaded: false,
		settings: {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 6,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		},
	};

	fetchData = async () => {
		const token = "d77c4ed0";
		const endpoint = `http://www.omdbapi.com/?apikey=${token}&s=${this.props.searchQuery}`;

		try {
			const response = await fetch(endpoint);

			if (response.ok) {
				const data = await response.json();
				this.setState({ data });
				this.setState({ isLoaded: true });
				console.log(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	componentDidMount = () => {
		this.fetchData();
	};

	render() {
		const { data, isLoaded } = this.state;

		return (
			<>
				<Slider {...this.state.settings} className={this.props.stile}>
					{data.Search &&
						data.Search.map((movie) => (
							<div key={movie.imdbID}>
								<SingleMovie img={movie.Poster} />
							</div>
						))}
				</Slider>
				{/* <Carousel className="mt-5 bg-black">
					{isLoaded &&
						data.Search.map((film, index) => (
							<Carousel.Item key={index}>
								<div className="movie-row">
									<div className="row g-1">
										<div className="col-md-2">
											<img
												className="img-fluid movie-cover"
												src={film.Poster}
												alt={film.Title}
											/>
										</div>
									</div>
								</div>
							</Carousel.Item>
						))}
				</Carousel> */}
			</>
		);
	}
}

export default Gallery;
