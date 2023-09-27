import "./ChooseCat.css";
// import { catOptions } from "src/components/Arrays.jsx";
import { catOptions } from "../Arrays";

export const ChooseCat = ({ chooseCat, setChooseCat}) => {
  const handleChooseCats = (event) => {
    setChooseCat(event.target.value);
  };

  return (
    <form>
      <h3>Choose your cat</h3>
      {/* This div with classname flex is only for my eyes sake */}
      <div className="flex">
        {catOptions.map((catOption) => (
          <div key={catOption.id}>
            {/* Need label to make image clickable */}
            <label>
              <input
                type="radio"
                value={catOption.id}
                checked={chooseCat === catOption.id}
                onChange={handleChooseCats}
              />
              <div className="radio-custom">
                <img src={catOption.imgSrc} alt={catOption.alt} />
              </div>
            </label>
          </div>
        ))}
      </div>
    </form>
  );
};
