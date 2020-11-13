import { useState } from "react";

const Form = ({ datas, setDatas, t }) => {

	const [x,setX] = useState(0);
	const [y, setY] = useState(0);
	const [logo, setLogo] = useState("");
	const [highestX, setHighestX] = useState(0);
	const [highestY, setHighestY] = useState(0);

	const onChangeX = (e) => {
		setX(Number(e.target.value));
	}
	const onChangeY = (e) => {
		setY(Number(e.target.value));
	}
	const onChangeLogo = (e) => {
		setLogo(e.target.value);
	}
	const onClick = () => {
		setDatas([...datas,
			{logo,x,y}
		])
		setLogo("");
		if (x > highestX) setHighestX(x);
		if (y > highestY) setHighestY(y);
		t.setXTotal(highestX);
		t.setYTotal(highestY);
		setX(0);
		setY(0);
	}
	return (
		<div className="form">
			<input onChange={(e) => onChangeLogo(e)} value={logo} type="text" placeholder="logo" /><br />
			<input onChange={(e) => onChangeX(e)} value={x} type="text" placeholder="x value" /><br />
			<input onChange={(e) => onChangeY(e)} value={y} type="text" placeholder="y value" /><br />
			<input onClick={() => onClick()}type="submit" value="submit" /><br />
			<h1>x - {t.xTotal}</h1>
			<h1>y - {t.yTotal}</h1>
		</div>
	)
}

export default Form;
