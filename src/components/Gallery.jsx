import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleMovie from "./SingleMovie";
import { token } from "./config/token";
import NextArrow from "./NextArrows";
import PrevArrow from "./PrevArrow";
class Gallery extends Component {
	state = {
		data: [],
		settings: {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 10,
			slidesToScroll: 1,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 7,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
			],
		},
	};

	fetchData = async () => {
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
		const { data } = this.state;

		return (
			<>
				<Slider {...this.state.settings} className={this.props.stile}>
					{data.Search &&
						data.Search.map((movie) => (
							<div key={movie.imdbID}>
								<SingleMovie
									img={movie.Poster}
									Title={movie.Title}
								/>
							</div>
						))}
				</Slider>
			</>
		);
	}
}

export default Gallery;
