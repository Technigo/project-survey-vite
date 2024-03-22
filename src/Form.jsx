export const Form = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        {/* "for" and "id" has to match, it's for accessabiliy  */}
        {/* use "htmlfor", otherwise you will get a warning in the console log.  */}
        <label className="question" htmlFor="bestThing">
          1. What's the best thing about you?
        </label>
        <input
          type="text"
          id="bestThing"
          name="bestThing"
          onChange={props.onTextChange}
        />
      </div>

      {/* https://stackoverflow.com/questions/13273806/using-the-html-label-tag-with-radio-buttons "radiogroup" is a accessibility thing to tell that now a group of radiobuttons that belongs together, will be coming*/}
      <div role="radiogroup" aria-labelledby="radioGroupLabel">
        <div className="question" id="radioGroupLabel">
          2. Do you often say nice things to people?
        </div>
        <div className="radioButton">
          <input
            type="radio"
            id="yes"
            name="niceThings"
            value="Yes"
            onChange={props.onOptionChange}
          />
          <label htmlFor="yes">Yes</label>
        </div>

        <div className="radioButton">
          <input
            type="radio"
            id="no"
            name="niceThings"
            value="No"
            // here we tell react to call the function when the radio button is clicked.
            onChange={props.onOptionChange}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>

      <div>
        <label className="question" htmlFor="definesYou">
          3. What defines you as a person?
        </label>
        <select
          id="definesYou"
          name="definesYou"
          onChange={props.onDropdownChange}
        >
          <option value="I'm kind">I'm kind</option>
          <option value="I lie to be nice">I lie to be nice</option>
          <option value="I'm loyal">I'm loyal</option>
          <option value="I'm fun">I'm fun</option>
        </select>
      </div>

      <div>
        {/* input is the same thing as button. */}
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
