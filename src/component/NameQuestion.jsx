export const NameQuestion = ({ value, setValue }) => {
  const [name, setName] = [value, setValue];

  const nameInput = (event) => {
    let enteredName = event.target.value;

    // Convert first letter to uppercase
    if (enteredName.length > 0) {
      enteredName = enteredName.charAt(0).toUpperCase() + enteredName.slice(1);
    }

    setName("name", enteredName);
  };

  return (
    <>
      <label className="question-name-age">
        {" "}
        What&apos;s your name?
        <input
          placeholder="Name here..."
          type="text"
          onChange={nameInput}
          value={name}
        />
      </label>
    </>
  );
};
