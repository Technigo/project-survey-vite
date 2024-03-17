import "../css/app.css";
import { Survey } from "./Survey";
import { Header } from "./Header";

export const App = () => {
	return (
		<div className="main">
			<Header />
			<Survey />
		</div>
	);
};


