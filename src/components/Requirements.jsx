export const Requirements = (props) => {
  const handleRequirementInput = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>
        <h3>3.</h3>
        <p>
          Do you have any specific requirements, such as medical needs or
          mobility assistance? (optional)
        </p>
      </legend>
      <textarea
        type="text"
        id="requirement-text"
        placeholder="Write your answer here"
        onChange={handleRequirementInput}
      />
    </fieldset>
  );
};
