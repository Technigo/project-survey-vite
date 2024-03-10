
import { useState } from "react";
import ReactDOM from 'react-dom/client';

export const App = () => {
	//dropdown form
	const [dropdown, setDropdown] = useState("");
	const [name, setName] = useState("");
	const [check, setChecked] = useState("");
	const [value, setRadio] = useState("");
	const handleChange = (e) => {
		//prevent reload
		e.preventDefault();
		//read the form data
		const form = e.target;
		const formData = new FormData(form);
		// make object of form data
		const formJson = Object.fromEntries(formData.entries());
		console.log(formJson);
	}


	return (
		<div>


			<form method="post" onSubmit={handleChange}>
				<label>
					Enter your name:
					<input
					value= {name}
						name="username"

						onChange={e => setName(e.target.value)}
					/>
				</label>
				{setName !== "" && <p>Your name is {name}</p>}
				<select type="dropdown" name="dropdownOption" onSubmit={handleChange} onChange={e => setDropdown(e.target.value)}  >
					<option name="dropdown" dropdown="1" value="1">1</option>
					<option name="dropdown" dropdown="2" value="2">2</option>
					<option name="dropdown" dropdown="3" value="3">3</option>
					<option name="dropdown" dropdown="4" value="4">4</option>
				</select >
				{setDropdown !== "" &&  <p>You chose {dropdown}</p>}

				<label>
					Checkbox: <input type="checkbox" name="myCheckbox" check="checked" onSubmit={handleChange} onChange={e => setChecked(e.target.value)} />
					{setChecked !== "" &&  <p>You chose {check}</p>}
				</label>
				<hr />


				<p>
					Radio buttons:
					<label>
						<input
						type="radio"
						name="myRadio"
						value="option1"
						onSubmit={handleChange}
						onChange={e => setRadio(e.target.value)}
						/>
						Option 1
					</label>
					<label>
						<input
							type="radio"
							name="myRadio"
							value="option2"
							onSubmit={handleChange}
							onChange={e => setRadio(e.target.value)}
						/>
						Option 2
					</label>
					<label>
						<input
						type="radio"
						name="myRadio"
						value="option3"
						onSubmit={handleChange}
						onChange={e => setRadio(e.target.value)}
						/>
						Option 3
					</label>

				</p>
				{setRadio !== "" &&  <p>You chose {value}</p>}
				<hr />
				<button type="reset">Reset form</button>
				<button type="submit">Submit form</button>
			</form>

		</div >

	)


};


