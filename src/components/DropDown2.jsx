import { useRef } from "react";
import "./DropDown.css";

export const DropDown2 = ({handleDropdownChange}) => {

    const dropdownRef = useRef(null);
  
    return (
      <div className="dropdown-container">
        <label htmlFor="musicDiscovery" className="label">
          How do you discover new music?
        </label>
        <select
          ref={dropdownRef}
          id="musicDiscovery"
          name="musicDiscovery"
          className="dropdown"
          onChange={handleDropdownChange}
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