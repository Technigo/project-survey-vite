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
          src="/src/assets/horizontally-centered-vertical-decoration.png"
          alt="Header Image"
        />
        <h1>
          <a>The Great Christmas Survey</a>
        </h1>
        {daysUntilChristmas === 0 && (
          <p>It's 🎅Christmas Day! Merry Christmas!🎄🎁</p>
        )}
        {daysUntilChristmas === 1 && (
          <p>It's 🎅{daysUntilChristmas}🎅 day until Christmas!</p>
        )}
        {daysUntilChristmas > 1 && (
          <p>It's 🎅{daysUntilChristmas}🎅 days until Christmas!</p>
        )}
        {daysUntilChristmas === 25 && (
          <p>Get ready for Christmas! 🎄🎁</p>
        )}
        {/* Add more messages for other specific days as needed */}
      </div>
    </header>
  );
}

export default Header;


  useEffect(() => {
    setDaysUntilChristmas(calculateDaysUntilChristmas());
  }, []);
import React from 'react';

function Header({ daysUntilChristmas }) {

  return (
    <div>
      <h2>Select your gender:</h2>
      <h2>How do you identify?</h2>
      <select
        value={selectedGender}
        onChange={handleGenderChange}
      >
        <option value="">Select your gender</option>
        <option value="">Make a selection?</option>
        {genderOptions.map((option) => (
          <option key={option} value={option}>
            {option}


function Header({ daysUntilChristmas }) {
  return (
    <header>
      <div className="header">

        <h1>
          <a>The Great Christmas Survey</a>
        </h1>
        <p>It's 🎅{daysUntilChristmas}🎅 days until Christmas!</p>
      </div>
    </header>
  );
}

export default Header;

