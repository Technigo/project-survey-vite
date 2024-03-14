import { useState } from "react";
import PropTypes from "prop-types";

export const Company = ({ setDisplayCompany }) => {
  const [company, setCompany] = useState("");

  // const selectCompany = (event) => {
  //   setCompany(event.target.value);
  //   setDisplayCompany(event.target.value);
  // };

  return (
    <div className="question company">
      <h3>4. Who do you dream of eating pizza with?</h3>
      <div className="dropdown">
        <label htmlFor="company">
          Select company
        <select
          id="company"
          value={company}
          onChange={(event) => {
            setCompany(event.target.value);
            setDisplayCompany(event.target.value);
          }}
        >
          <option value="" disabled hidden>
            -- Company of your choice --
          </option>
          <option value="Michelle Obama">Michelle Obama</option>
          <option value="Albert Einstein">Albert Einstein</option>
          <option value="Greta Thunberg">Greta Thunberg</option>
          <option value="Jackie Chan">Jackie Chan</option>
          <option value="Margaret Thatcher">Margaret Thatcher</option>
          <option value="Martin Luther King Jr">Martin Luther King Jr</option>
          <option value="Frida Kahlo">Frida Kahlo</option>
          <option value="Vladimir Putin">Vladimir Putin</option>
          <option value="Yuri Gagarin">Yuri Gagarin</option>
          <option value="Yayoi Kusama">Yayoi Kusama</option>
          <option value="Miyazaki Hayao">Miyazaki Hayao</option>
        </select>
        </label>
      </div>

      <p>
        <span>We will organize a pizza date for you and {company}</span>
      </p>
    </div>
  );
};

Company.propTypes = {
  setDisplayCompany: PropTypes.func,
};
