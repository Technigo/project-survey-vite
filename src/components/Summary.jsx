import { useEffect } from "react";

export const Summary = ({ value, mood, song, setMood }) => {
  useEffect(() => {
    if (mood === "Yes") {
      setMood("You like music, that's lovely");
    } else {
      setMood("You don't like music? They say silence is golden.");
    }
  });

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <p>{value} is your mood-boosting activity.</p>
        <p>
          {mood} And if ever you are down - listen to {song}
        </p>
      </div>
    </div>
  );
};
