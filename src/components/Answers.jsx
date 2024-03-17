import PropTypes from "prop-types";

// ICONS TO BE SHOWN ON ANSWER PAGE
import coneChocolate from "../assets/icon-cone-chocolate.png";
import coneVanilla from "../assets/icon-cone-vanilla.png";
import coneStrawberry from "../assets/icon-cone-strawberry.png";
import cupChocolate from "../assets/icon-cup-chocolate.png";
import cupVanilla from "../assets/icon-cup-vanilla.png";
import cupStrawberry from "../assets/icon-cup-strawberry.png";

export const Answers = ({ name, flavor, cupOrCone, toppings }) => {
  const coneIcons = [coneChocolate, coneVanilla, coneStrawberry];
  const cupIcons = [cupChocolate, cupVanilla, cupStrawberry];

  let icon = "";

// SWITCH TO DECIDE ICONS
  if (cupOrCone === "cone") {
    switch (flavor) {
      case "chocolate":
        icon = coneIcons[0];
        break;
      case "vanilla":
        icon = coneIcons[1];
        break;
      default:
        icon = coneIcons[2];
    }
  } else {
    switch (flavor) {
      case "chocolate":
        icon = cupIcons[0];
        break;
      case "vanilla":
        icon = cupIcons[1];
        break;
      default:
        icon = cupIcons[2];
    }
  }

// IF/ELSE FUNCTION TO SHOW DIFFERENT MESSAGES AND ICONS DEPENDING ON ANSWERS IN FORM
  let message = "";
  if (toppings === "plain") {
    message = `We have registered that your favorite ice cream is
        plain ${flavor} flavored ice cream in a ${cupOrCone}.`;
  } else if (toppings === "sauce" || toppings === "sprinkles") {
    message = `We have registered that your favorite ice cream is ${flavor} flavored ice cream in a ${cupOrCone} with ${toppings}.`;
  } else {
    message = `We have registered that your favorite ice cream is ${flavor} flavored ice cream in a ${cupOrCone} with sprinkles and sauce.`;
  }

  return (
    <div>
      <h2>Thank you {name}!</h2>
      <p>{message}</p>
      <p>Thank you for partipication!</p>
      <img src={icon} alt="icon of ice cream" className="icon" />
    </div>
  );
};

Answers.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  cupOrCone: PropTypes.string,
  toppings: PropTypes.string,
};
