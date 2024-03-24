import { useState } from "react";
import { PirateName } from "./PirateName";

export const Survey = () => {
	//dropdown, input, checkbox, radiobuttons and visibility
	const [dropdown, setDropdown] = useState("Earth");
	const [name, setName] = useState("name..");
	const [check, setCheck] = useState("");
	const [value, setRadio] = useState("Rum");
	const [toggle, setToggle] = useState("visible");
	const [visible, setVisible] = useState("hidden");
	const [userData, setUserData] = useState([]);

	const handleDataUpdate = (updatedData) => {
		setUserData(updatedData);
	};

	// handle states
	const handleChange = (e) => {
		e.preventDefault();
		if (!name || !value || !dropdown) {
			alert('Please fill out all fields before submitting the form');
			return;
		}
		const form = e.target;
		const formData = new FormData(form);
		const formJson = Object.fromEntries(formData.entries());
		console.log("formjson", formJson);
		setUserData((prevData) => [...prevData, formJson]);

	};


	//hide form on post
	const toggleInvisible = () => {
		setToggle("hidden");
		toggleVisible()
	}

	//show user choices on submit
	const toggleVisible = () => {
		setVisible("visible")
	}

	// reset form on refresh
	const refreshPage = () => {
		window.location.reload(false);
	}
	return (
		<div className="formwrapper">
			<div className={toggle}>
				<form method="post" onSubmit={handleChange}>
					<div className="nameinput">
						<label>
							<p className="labelheader">Enter your name</p>
							<input
								className="typeform"
								value={name}
								name="username"
								required
								onChange={(e) => setName(e.target.value)}
							/>
						</label>
					</div>
					<label htmlFor="select">
						<p className="labelheader">Your favorite element</p>
						<select
							id="select"
							type="dropdown"
							name="dropdownOption"
							onChange={(e) => setDropdown(e.target.value)}
							required
						>
							<option value="">Select an option</option>
							<option value="Earth">Earth</option>
							<option value="Air">Air</option>
							<option value="Fire">Fire</option>
							<option value="Water">Water</option>
						</select>
					</label>
					<div className="radioContainer">
						<label>
							<p className="labelheader">Are you older than 25?
								<input
									type="checkbox"
									name="myCheckbox"
									value="not"
									onChange={(e) => setCheck(e.target.value)}
								/>
							</p>
						</label>
					</div>
					<p className="labelheader">What do you live for?</p>
					<p>
						<label className="custom-radio">
							<input
								type="radio"
								name="myRadio"
								value="Treasure"
								onChange={(e) => setRadio(e.target.value)}
								required
								checked
							/>
							Treasure
						</label>
						<label className="custom-radio">
							<input
								type="radio"
								name="myRadio"
								value="Pillaging"
								onChange={(e) => setRadio(e.target.value)}
								required
							/>
							Pillaging
						</label>
						<label className="custom-radio">
							<input
								type="radio"
								name="myRadio"
								value="Rum"
								onChange={(e) => setRadio(e.target.value)}
								required
							/>
							Rum
						</label>
					</p>
					<div className="getresult">
						<button type="submit" onClick={toggleInvisible}>
							Give me my pirate name!
						</button>
					</div>
				</form>
			</div>
			<div className={visible}>
				<h2>Your answers</h2>
				<ul>
					{name !== "" && (
						<li>
							<p>Your name is {name.charAt(0).toUpperCase() + name.slice(1)}</p>
						</li>
					)}
					{dropdown !== "" && (
						<li>
							<p>Your favorite element is {dropdown}</p>
						</li>
					)}
					{check !== "" && (
						<li>
							<p>You are {check} younger than 25</p>
						</li>
					)}
					{value !== "" && (
						<li>
							<p>You live for {value}</p>
						</li>
					)}
				</ul>
				<hr />
				{/*display generated pirate name based upon users choices*/}
				<div className="piratename">
					{userData && userData.length > 0 && (
						<PirateName
							userData={userData}
							myRadio={userData.myRadio}
							myCheckbox={userData.myCheckbox}
							dropdownOption={userData.dropdownOption}
							title={userData.title}
							handleDataUpdate={handleDataUpdate}
						/>
					)}
					<h2 className="pirateresult">{userData.title}</h2>
					{userData.myCheckbox} {userData.username}
					{userData.dropdownOption}
					{userData.myRadio}
				</div>
				<button className={visible} type="reset" onClick={refreshPage}>
					Try again
				</button>
			</div>
		</div>
	);
};
