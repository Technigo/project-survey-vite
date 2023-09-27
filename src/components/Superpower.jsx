import React from "react";

export const Superpower = () => {
  return (
    <form>
      <select
        onChange={(event) => Superpower(event.target.value)}
        value={Superpower}
      >
        <option value="">Select super power</option>
        <option value="flying">Flying</option>
        <option value="invisibility">Invisibility</option>
        <option value="superspeed">Super speed</option>
      </select>
    </form>
  );
};
