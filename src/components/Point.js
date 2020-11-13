import { useState, useEffect } from "react";

const Point = ({ children, xTotal, yTotal, x, y }) => {
	const [style, setStyle] =  useState({})
	useEffect(() =>{
		setStyle({
			position: "absolute",
			left: ((x / xTotal) * 100) + "%",
			bottom: ((y / yTotal) * 100) + "%",
			transform: "translate(-50%,50%)",
			color: "#fff"
		})
	},[setStyle, xTotal, yTotal, x, y])
	return (
		<div style={style}>
			{ children }
		</div>
	)
}

export default Point;
