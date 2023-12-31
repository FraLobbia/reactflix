function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				transform: "scale(3)",
				opacity: "0.3",
				marginRight: "3rem",
				zIndex: "3",
			}}
			onClick={onClick}
		/>
	);
}

export default NextArrow;
