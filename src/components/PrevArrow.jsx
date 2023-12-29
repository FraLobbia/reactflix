function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				transform: "scale(3)",
				opacity: "0.3",
				marginLeft: "3rem",
			}}
			onClick={onClick}
		/>
	);
}

export default PrevArrow;
