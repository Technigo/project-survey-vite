import { useState } from "react";
import PropTypes from "prop-types";

function SurveyForm({ onSubmit }) {
  const [favoriteFood, setFavoriteFood] = useState("");
  const [cuisinePreference, setCuisinePreference] = useState("");
  const [foodReason, setFoodReason] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      favoriteFood,
      cuisinePreference,
      foodReason,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question1
        <input
          type="text"
          value={favoriteFood}
          onChange={(e) => setFavoriteFood(e.target.value)}
        />
      </label>

      <label>
        Question2
        <select
          value={cuisinePreference}
          onChange={(e) => setCuisinePreference(e.target.value)}
        >
          <option value="">Choose from options</option>
          <option value="japanese">Option1</option>
          <option value="italian">Option2</option>
          <option value="mexican">Option3</option>
        </select>
      </label>

      <label>
        Question 3
        <textarea
          value={foodReason}
          onChange={(e) => setFoodReason(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default SurveyForm;

SurveyForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
