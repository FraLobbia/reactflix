import React from "react";

const SingleMovie = ({ Title, img }) => {
	return (
		<img
			src={img}
			alt={`Poster di ${Title}`}
			style={{ width: "100%", height: "300px", objectFit: "contain" }}
		/>
	);
};

export default SingleMovie;
