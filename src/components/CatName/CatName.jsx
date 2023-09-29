import "./CatName.css";

export const CatName = ({catName, setCatName}) => {

  const catNameInput = (event) => setCatName(event.target.value);

  // Event handler for changes in the input fields
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    // Sets up an event handler for when the form is submitted. It will call the handleSubmit function when the form is submitted.
    <form onSubmit={handleSubmit} className="cat-name-form">
      <h3>Name your cat</h3>
      <p className="p-suggestions">Here are some suggestions: Whiskers, Luna, Sylvester</p>
      <label>
        {/* Write your cat's name here..  */}
        <input
          className="cat-name-input"
          type="text"
          name="catName"
          value={catName}
          onChange={catNameInput}
          placeholder="Garfield..."
        />
      </label>
    </form>
  );
};
