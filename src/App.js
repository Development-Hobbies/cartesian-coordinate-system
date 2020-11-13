import './App.css';
import Plane from './components/Plane';
import Point from './components/Point';
import Form from './components/Form';

import { useState, useEffect } from "react";

function App() {
	const [ datas, setDatas ] = useState([]);
	const [xTotal, setXTotal] = useState(0);
	const [yTotal, setYTotal] = useState(0);

	const T = {
		xTotal,
		yTotal,
		setXTotal,
		setYTotal
	}

	return (
		<div>
			<Plane>
				{
					datas.map((data) => (
						<Point x={data.x} y={data.y} xTotal={xTotal} yTotal={yTotal}>
							<h1>{ data.logo }</h1>
						</Point>
					))
				}
			</Plane>
			<Form setDatas={setDatas} t={T} datas={datas} />
		</div>
	);
}

export default App;
