//Welcome to the survey of christmas and maybe a nice banner underneath like we did on week 1

import React, { useState, useEffect } from 'react';

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
    const daysRemaining = Math.ceil((christmasDate - currentDate) / (1000 * 60 * 60 * 24));
    return daysRemaining;
  };

  // Update the countdown days when the component mounts
  useEffect(() => {
    setDaysUntilChristmas(calculateDaysUntilChristmas());
  }, []);

  return (
    <header>
      <div className="header">
        <h1><a href="/">Welcome to the survey of Christmas</a></h1>
        <p>{daysUntilChristmas} days until Christmas!</p>
      </div>
    </header>
  );
}

export default Header;
  