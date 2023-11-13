import React, { useState, useEffect } from "react";
import headerImage from "../assets/Headerimage.png"; // Correct path to image based on your project structure

function Header() {
  // Define a state variable for the countdown days
  const [daysUntilChristmas, setDaysUntilChristmas] = useState(0);

  // Calculate the number of days until Christmas
  const calculateDaysUntilChristmas = () => {
    // Your calculation logic here
  };

  // Use effect to set the days until Christmas
  useEffect(() => {
    setDaysUntilChristmas(calculateDaysUntilChristmas());
  }, []);

  // Component JSX
  return (
    <header>
      <div className="header">
        <img src={headerImage} alt="Header Decoration" /> {/* Image included here */}
        <h1><a>The Great Christmas Survey</a></h1>
        <p>It's 🎅{daysUntilChristmas}🎅 days until Christmas!</p>
        {/* ... other components or HTML ... */}
      </div>
    </header>
  );
}

export default Header;

