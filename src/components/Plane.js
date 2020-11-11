import "./Plane.css";

import X from "./X";
import Y from "./Y";

const Plane = ({ children }) => {
	return (
		<div className="plane">
			<Y />
			<X />
			{ children }
		</div>
	);
};

export default Plane;
