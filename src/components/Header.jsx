//Welcome to the survey of christmas and maybe a nice banner underneath like we did on week 1

import React, { useState, useEffect } from "react";


function Header() {
  // Define a state variable for the countdown days
  const [daysUntilChristmas, setDaysUntilChristmas] = useState(0);

  // Calculate the number of days until Christmas
  const calculateDaysUntilChristmas = () => {
    const currentDate = new Date();
    const christmasDate = new Date(currentDate.getFullYear(), 11, 25); // December is month 11
    if (currentDate > christmasDate) {
      christmasDate.setFullYear(currentDate.getFullYear() + 1);
    }
    const daysRemaining = Math.ceil(
      (christmasDate - currentDate) / (1000 * 60 * 60 * 24)
    );
    return daysRemaining;
  };


  useEffect(() => {
    setDaysUntilChristmas(calculateDaysUntilChristmas());
  }, []);

  return (
    <header>
      <div className="header">
      <img
      id="header-image"
      src="./horizontally-centered-vertical-decoration.png"
      alt="Header Image"
      />
        <h1>
          <a>The Great Christmas Survey</a>
        </h1>
        <p>It's 🎅{daysUntilChristmas}🎅 days until Christmas!</p>
      </div>
    </header>
  );
}

export default Header;
