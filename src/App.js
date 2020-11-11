import './App.css';
import Plane from './components/Plane';
import Point from './components/Point';

function App() {
	let participants = [
		{logo: "A", x: 90, y: 50},
		{logo: "B", x: 50, y: 50},
		{logo: "C", x: 10, y: 90}
	];
	const total = 100;
	return (
		<Plane>
			{
				participants.map((data) => (
					<Point x={data.x} y={data.y} total={total}>
						<h1>{ data.logo }</h1>
					</Point>
				))
			}
		</Plane>
	);
}

export default App;
