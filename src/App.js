import './App.css';
import Plane from './components/Plane';
import Point from './components/Point';
import Form from './components/Form';

import { useState, useEffect } from "react";

function App() {
	const [ datas, setDatas ] = useState([]);
	const [xTotal, setXTotal] = useState(100);
	const [yTotal, setYTotal] = useState(100);

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
			<Form setDatas={setDatas} datas={datas} setXTotal={setXTotal} setYTotal={setYTotal}/>
		</div>
	);
}

export default App;
