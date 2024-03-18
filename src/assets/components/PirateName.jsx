import "../css/app.css";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import { pillage, treasure, rum, dirt, air, water, fire, piratenames } from './ArrayComponent';

export const PirateName = ({ userData, handleDataUpdate }) => {
	//define the propTypes
	PirateName.propTypes = {
		userData: PropTypes.object.isRequired,
		handleDataUpdate: PropTypes.func.isRequired,
		myRadio: PropTypes.string,
		title: PropTypes.string,
	};

	//generate an appropriate element based on the dropdown
	const generateElement = (element) => {
		let word = "";
		let addO = " O' ";
		switch (element) {
			case "Air":
				word = air[Math.floor(Math.random() * air.length)];
				break;
			case "Earth":
				word = dirt[Math.floor(Math.random() * dirt.length)];
				break;
			case "Water":
				word = water[Math.floor(Math.random() * water.length)];
				break;
			case "Fire":
				word = fire[Math.floor(Math.random() * fire.length)];
				break;
			default:
				word = "";
				break;
		}
		return addO + word;
	};

	//generate an appropriate interest based on the passion
	const generateInterests = (passion) => {
		let hobby = "";
		let addOfThe = " of the ";

		switch (passion) {
			case "Rum":
				hobby = rum[Math.floor(Math.random() * rum.length)];
				break;
			case "Treasure":
				hobby = treasure[Math.floor(Math.random() * treasure.length)];
				break;
			case "Pillaging":
				hobby = pillage[Math.floor(Math.random() * pillage.length)];
				break;
			default:
				break;
		}
		return addOfThe + hobby;
	};

	useEffect(() => {
		//checking if the userData is not empty
		if (userData && userData[0]) {
			//create element and passion based on the user input
			const element = userData[0].dropdownOption;
			const passion = userData[0].myRadio;

			const updatedData = {
				//generate a random pirate name
				username: piratenames[Math.floor(Math.random() * piratenames.length)],
				//check if user is older than 25 and can be a Captain yharr
				myCheckbox: userData[0].myCheckbox === "not" ? "Captain" : "",
				//matches user input with suitable random elements and passions based upon the user input
				dropdownOption: generateElement(element),
				myRadio: generateInterests(passion),
				//display the title of the pirate name
				title: "Your new piratename"
			};
			//update the data
			handleDataUpdate(updatedData);
		}
		//dependency array and dependency function. if either changes, the effect will run again
	}, [userData, handleDataUpdate]);
	return (
		<div className="pirateresult">
		</div>
	);
};