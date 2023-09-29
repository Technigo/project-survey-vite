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
       {/* 'aria-label' is an accessability attribute that provides an accessible label for screen readers, informing them about the purpose of the drop-down. */}
      <select
        className="personality-dropdown"
        aria-label="Select personality from dropdown menu."
        onChange={handleOptionChange}
        value={personality}
      >
        {/* This sets the default value of the dropdown menu to unselectable. */}
        <option value="" disabled defaultValue>
          Select personality
        </option>
        {/* Using the Map() method to iterate over the 'personalityTypes' array. */}
        {personalityTypes.map((type) => (
          <option key={type.id} value={type.id}>
            {type.id}
          </option>
        ))}
      </select>
    </form>
  );
};
