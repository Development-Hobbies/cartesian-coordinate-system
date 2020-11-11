import { useState, useEffect } from "react";

const Point = ({ children, total, x, y }) => {
	const [style, setStyle] =  useState({})
	useEffect(() =>{
		setStyle({
			position: "absolute",
			left: ((x / total) * 100) + "%",
			bottom: ((y / total) * 100) + "%",
			transform: "translate(-50%,50%)",
			color: "#fff"
		})
	},[setStyle, total, x, y])
	return (
		<div style={style}>
			{ children }
		</div>
	)
}

export default Point;
