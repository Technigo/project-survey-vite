import { useState } from "react";

const houseGroup = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

export const House = () => {
  const [houses, setHouses] = useState();

  return (
    <form>
      Which Hogwarts house represents you the best?
      {houseGroup.map((house) => (
        <label key={house}>
          <input
            type="radio"
            value={house}
            onChange={(event) => setHouses(event.target.value)}
            checked={houses === house}
          />
          {house}
        </label>
      ))}
    </form>
  );
};
