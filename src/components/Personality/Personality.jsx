import "./Personality.css";

export const Personality = ({ personality, setPersonality }) => {
  return (
    <form className="personality-form">
      <h3>Personality</h3>
      <p>Lorem ipsum dolor ...</p>
      <select
        className="personality-dropdown"
        key={personality}
        onChange={(event) => setPersonality(event.target.value)}
        value={personality}
      >
        <option value="" disabled selected>
          Select personality...
        </option>
        <option value="extrovert">Extrovert</option>
        <option value="agreeable">Agreeable</option>
        <option value="neurotic">Neurotic</option>
        <option value="dominant">Dominant</option>
        <option value="impulsive">Impulsive</option>
      </select>
    </form>
  );
};
