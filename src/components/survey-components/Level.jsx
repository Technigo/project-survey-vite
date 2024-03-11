import { useState } from "react";

export const Level = () => {
    const [selectedLevel, setLevel] = useState("Novice");

    const levelSelect = (event) => {
        setLevel(event.target.value)
    }

  return (
      <div className="question level">
          <h2>1. Select your pizza eating level:</h2>
      <form>
        <div>
          <label>
            <input
              type="radio"
              value="Novice"
              checked={selectedLevel === "Novice"}
              onChange={levelSelect}
            />
            Novice
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Intermediate"
              checked={selectedLevel === "Intermediate"}
              onChange={levelSelect}
            />
            Intermediate
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Expert"
              checked={selectedLevel === "Expert"}
              onChange={levelSelect}
            />
            Expert
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Doctoral degree in Pizza eating"
              checked={selectedLevel === "Doctoral degree in Pizza eating"}
              onChange={levelSelect}
            />
            Doctoral degree in Pizza eating
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Italian"
              checked={selectedLevel === "Italian"}
              onChange={levelSelect}
            />
            Italian
          </label>
        </div>
      </form>
      <p>You selected: {selectedLevel}</p>
    </div>
  );
};
