import { useState } from "react";

const Form = ({ datas, setDatas }) => {

	const [x,setX] = useState(0);
	const [y, setY] = useState(0);
	const [logo, setLogo] = useState("");

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
		setX(0);
		setY(0);
	}
	return (
		<div className="form">
			<input onChange={(e) => onChangeLogo(e)} value={logo} type="text" placeholder="logo" /><br />
			<input onChange={(e) => onChangeX(e)} value={x} type="text" placeholder="x value" /><br />
			<input onChange={(e) => onChangeY(e)} value={y} type="text" placeholder="y value" /><br />
			<input onClick={() => onClick()}type="submit" value="submit" /><br />
		</div>
	)
}

export default Form;
