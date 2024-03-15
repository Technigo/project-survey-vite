import "./Header.css";
import { useState, useEffect } from "react";

export const Header = ({ showSummary }) => {
  const [heading, setHeading] = useState("The Science of Happiness");
  const [subheading, setSubHeading] = useState("Everyday Joy Boosters survey");

  useEffect(() => {
    if (showSummary) {
      setHeading("Results");
      setSubHeading("The science of happiness");
    }
  }, [showSummary]);

  return (
    <header>
      <h1>{heading}</h1>
      <h2>{subheading}</h2>
    </header>
  );
};
