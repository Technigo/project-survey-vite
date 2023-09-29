import "./ChooseCat.css";
import { catOptions } from "../Arrays";

export const ChooseCat = ({ chooseCat, setChooseCat }) => {
  const handleChooseCats = (event) => {
    setChooseCat(event.target.value);
  };

  return (
    <form>
      <h3>Choose your cat</h3>
      {/* This div with classname flex is only for my eyes sake (Julia) */}
      <div className="cat-image-container">
        {/* Mapping over the 'catOptions' array. The 'Key' prop is used to uniquely identify each cat. */}
        {catOptions.map((catOption) => (
          <div key={catOption.id} className="each-cat-wrapper">
            {/* Using label element to improve accssibility and user experience. The 'Key' prop is used to uniquely identify each label element and it's is important for React's virtual DOM to efficiently track and update elements. */}
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
