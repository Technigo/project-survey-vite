// eslint-disable-next-line react/prop-types
export function Location({ value, onChange }) {
  return (
    <div className="element-container">
      <div className="location-container">
        <h2 className="question">Choose where you want to start your story?</h2>

        <div className="radio-button">
          <input
            type="radio"
            id="forest"
            name="location"
            value="forest"
            checked={value === "the forest"}
            onChange={() => onChange("the forest")}
            className="radio"
          />
          <label htmlFor="forest">An enchanted forest</label>
        </div>
        <div className="radio-button">
          <input
            type="radio"
            name="location"
            id="kingdom"
            value="kingdom"
            checked={value === "a far far away kingdom"}
            onChange={() => onChange("a far far away kingdom")}
            className="radio"
          />
          <label htmlFor="kingdom">A far far away kingdom</label>
        </div>

        <div className="radio-button">
          <input
            type="radio"
            id="school"
            name="location"
            value="school"
            checked={value === "the School of Witchcraft and Wizardry"}
            onChange={() => onChange("the School of Witchcraft and Wizardry")}
            className="radio"
          />
          <label htmlFor="school">School of Witchcraft and Wizardry</label>
        </div>
      </div>
    </div>
  );
}
