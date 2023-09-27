import "./NameInput.css"

export const NameInput = ({ updateFormData, value }) => {
    
  const name = (e) => updateFormData("name", e.target.value);

      return (
      <>
        <div className="nameinput-wrapper">
          <h3>Please tell us your name</h3>
            <label className="nameinput-container">
              Name:
              <input type="text" value={value} placeholder="Enter your name" onChange={name} />
            </label>
        </div>
      </>
    )
}
