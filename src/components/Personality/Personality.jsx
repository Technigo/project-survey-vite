import "./Personality.css";
import { personalityTypes } from "../Arrays";

export const Personality = ({ personality, setPersonality }) => {
  const handleOptionChange = (event) => {
    setPersonality(event.target.value);
  };

  return (
    <form className="personality-form">
      <h3>Personality</h3>
      <p>
        Selecting your cat's personality is like choosing a unique companion
        tailored to your lifestyle. Are you looking for an adventurous, outgoing
        cat, or a laid-back, cuddly friend? Perhaps you prefer an independent,
        self-assured feline, or a playful, energetic buddy. Explore the
        personalities below and find the purrfect match for your home!
      </p>
      <select
        className="personality-dropdown"
        // key={personality}
        aria-label="Select personality from dropdown menu"
        onChange={handleOptionChange}
        value={personality}
      >
        <option value="" disabled defaultValue>
          Select personality...
        </option>
        {personalityTypes.map((type) => (
          <option key={type.id} value={type.id}>
            {type.id}
          </option>
        ))}
      </select>
    </form>
  );
};

{
  /* <select aria-live="polite" role="listbox">
  <option role="option" value="option1">Option 1</option>
  <option role="option" value="option2">Option 2</option>
  <option role="option" value="option3">Option 3</option>
</select>  In this example:

1. aria-live="polite" tells the screen 
reader to politely announce changes 
to the content of the dropdown when 
options are selected.

2. role="listbox" specifies that the <select> 
element serves as a listbox, which is a commonly 
used role for dropdown menus.

3. role="option" is applied to each <option> 
element to indicate that they are individual 
options within the listbox.*/
}
