import PropTypes from "prop-types";
//import { useState } from "react";

export const Answers = ({name, flavor, cupOrCone, toppings}) => {
  /*const [name, setName] = useState(name);
  const [flavor, setFlavor] = useState(flavor);
  const [cupOrCone, setCupOrCone] = useState(cupOrCone);
  const [withSauce, setWithSauce] = useState(false);
  const [withSprinkles, setWithSprinkles] = useState(false);*/
  
  let message = "";
  if (toppings === "plain") {
    message = `Thank you ${name}! We have registered that your favorite ice cream is
        plain ${flavor} flavored ice cream in a ${cupOrCone}.`;
  } else if (toppings === "sauce" || toppings === "sprinkles") {
    message = `Thank you ${name}! 
    We have registered that your favorite ice cream is ${flavor} flavored ice cream in a ${cupOrCone} with ${toppings}.`;
  } else {
    message = `Thank you ${name}! We have registered that your favorite ice cream is ${flavor} flavored ice cream in a ${cupOrCone} with sprinkles and sauce.`;
  }
  return (
    <div>
      <p>{message}</p>
      <p>Thank you for partipication!</p>
    </div>
  );
};

Answers.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  cupOrCone: PropTypes.string,
  toppings: PropTypes.string
};
