import React from 'react';

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

