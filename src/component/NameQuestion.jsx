export const NameQuestion = ({ value, setValue }) => {
  const [name, setName] = [value, setValue];

  const nameInput = (event) => setName("name", event.target.value);

  return (
    <>
      <label className="question-name-age">
        {" "}
        What's your name?
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
