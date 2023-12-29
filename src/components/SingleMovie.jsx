import React from "react";

const SingleMovie = (props) => {
  return (
    <img
      src={props.img}
      className="poster"
      alt="description"
      style={{ width: "95%", height: "400px", objectFit: "cover" }}
    />
  );
};

export default SingleMovie;
