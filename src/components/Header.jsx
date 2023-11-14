import React, { useState, useEffect } from "react";
import headerImage from "../assets/Headerimage.png"; // Correct path to image based on your project structure

function Header() {
  // Define a state variable for the countdown days
  const [daysUntilChristmas, setDaysUntilChristmas] = useState(0);

  // Calculate the number of days until Christmas
  const calculateDaysUntilChristmas = () => {
    // Get the current date
    const currentDate = new Date();

    // Calculate Christmas date for the current year
    const christmasDate = new Date(currentDate.getFullYear(), 11, 25); // December is month 11

    // If Christmas has passed this year, calculate for the next year
    if (currentDate > christmasDate) {
      christmasDate.setFullYear(currentDate.getFullYear() + 1);
    }

    // Calculate the difference in days
    const daysRemaining = Math.ceil((christmasDate - currentDate) / (1000 * 60 * 60 * 24));

    return daysRemaining;
  };

  // Use effect to set the days until Christmas
  useEffect(() => {
    setDaysUntilChristmas(calculateDaysUntilChristmas());
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  // Component JSX
  return (
    <header>
      <div className="header">
        <img src={headerImage} alt="Header Decoration" /> {/* Image included here */}
        <h1><a>The Great Christmas Survey</a></h1>
        <p>It's 🎅{daysUntilChristmas}🎅 days until Christmas!</p>
      </div>
    </header>
  );
}

export default Header;

