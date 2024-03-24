import "./css/App.css";
import { Survey } from "./components/Survey";
import { Header } from "./components/Header";

export const App = () => {
	return (
		<div className="main">
			<Header />
			<Survey />
		</div>
	);
};


