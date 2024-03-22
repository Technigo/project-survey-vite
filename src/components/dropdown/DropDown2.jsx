import React, { useState } from "react";
import "./DropDown.css";

export const DropDown2 = ({ handleChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    handleChange(value);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="musicDiscovery" className="label">
        <span className="number">4.</span>
        <span className="question">How do you discover new music?</span>
      </label>
      <select
        id="musicDiscovery"
        name="musicDiscovery"
        className="dropdown"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="">Select an option</option>
        <option value="Streaming platforms">
          Streaming platforms (Spotify, Apple Music, etc.)
        </option>
        <option value="Radio">Radio</option>
        <option value="Recommendations from friends or family">
          Recommendations from friends or family
        </option>
        <option value="Social media">
          Social media (Facebook, Instagram, etc.)
        </option>
        <option value="Music blogs or websites">Music blogs or websites</option>
        <option value="Live performances">Live performances</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};
