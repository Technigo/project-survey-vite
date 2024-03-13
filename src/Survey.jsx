import { useState } from "react";
import "./app.css";
import { PirateName } from "./PirateName";
let formJson;

export const Survey = () => {
	//dropdown, input, checkbox, radiobuttons and visibility
	const [dropdown, setDropdown] = useState("");
	const [name, setName] = useState("");
	const [check, setChecked] = useState("");
	const [value, setRadio] = useState("");
	const [toggle, setClear] = useState("visible");
	const [visible, setVisible] = useState("hidden");

	// handle states
	const handleChange = (e) => {
		//prevent reload
		e.preventDefault();
		//read the form data
		const form = e.target;
		const formData = new FormData(form);
		// make object of form data
		const formJson = Object.fromEntries(formData.entries());
	}

	//hide form on post
	const toggleInvisible = () => {
		setClear("hidden");
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
			<h1>Pirate name generator</h1>
			<div className={toggle}>

				<form method="post" onSubmit={handleChange}  >
					<label>
						Enter your name:
						<input
							value={name}
							name="username"
							required
							onChange={e => setName(e.target.value)}
						/>
					</label>


					<select
						type="dropdown"
						name="dropdownOption"
						onSubmit={handleChange}
						onChange={e => setDropdown(e.target.value)}
						required
					>
						<option name="dropdown">Choose an element</option>
						<option name="dropdown" value="Landlubber">Land</option>
						<option name="dropdown" value="Sky">Air</option>
						<option name="dropdown" value="Cannonfire">Fire</option>
						<option name="dropdown" value="Deep sea">Water</option>
					</select >
					<label>
						Are you older than 25?:
						<input
							type="checkbox"
							name="myCheckbox"
							value="Half-Rotten"
							onSubmit={handleChange}
							onChange={e => setChecked(e.target.value)}
						/>
					</label>
					<hr />
					<p>
						What tickles you fancy:
						<label>
							<input
								type="radio"
								name="myRadio"
								value="Goldtooth"
								onSubmit={handleChange}
								onChange={e => setRadio(e.target.value)}
							/>
							Gold & Treasure
						</label>
						<label>
							<input
								type="radio"
								name="myRadio"
								value="Bonesplitter"
								onSubmit={handleChange}
								onChange={e => setRadio(e.target.value)}
							/>
							Murder & pillage
						</label>
						<label>
							<input
								type="radio"
								name="myRadio"
								value="Drunken sailor"
								onSubmit={handleChange}
								onChange={e => setRadio(e.target.value)}
							/>
							Rum & Grog
						</label>

					</p>
					<hr />


					<button type="submit" onClick={toggleInvisible}>Submit form</button>
				</form>
			</div>
			<div className={visible}>
				{setName !== "" && <p>Your name is {name}</p>}
				{setDropdown !== "" && <p>You chose {dropdown}</p>}
				{setChecked !== "" && <p>You chose {check}</p>}
				{setRadio !== "" && <p>You chose {value}</p>}

				<div>Your pirate name is:</div>
				<div className="piratename">
					{check} Captain  {name} &nbsp;  <PirateName />&nbsp;   O&apos;{value} of the {dropdown}</div>

			</div>
			<button className={visible} type="reset" onClick={refreshPage}>Reset form</button>
		</div >

	)
};
