import "./CatName.css";

export const CatName = ({catName, setCatName}) => {

  const catNameInput = (event) => setCatName(event.target.value);

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="cat-name-input">
      <h3>Name your cat</h3>
      <label>
        Write your cat's name here.. 
        <input
          type="text"
          name="catName"
          value={catName}
          onChange={catNameInput}
          placeholder="Garfield..."
        />
      </label>
      <p>Here are some suggestions: Whiskers, Luna, Sylvester</p>
    </form>
  );
};
