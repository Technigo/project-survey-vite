import style from "./Hero.module.css";

const Hero = ({ step }) => { // Destructure "step" from props
  // Get the current step from the MultiStepForm
  const currentStage = step;
  console.log(currentStage);

  let backgroundImage;

  if (step === 1) {
    backgroundImage = "/assets/dog.jpg";
  } else if (step === 2) {
    backgroundImage = "/assets/dogs.jpg";
  } else if (step === 3) {
    backgroundImage = "/assets/dog_snow.jpg";
  } else {
    backgroundImage = "/assets/dog_snow.jpg";
  }

  return (
    <div className={style.imageContainer}>
      <img src={backgroundImage} alt="dog" className={style.heroImage} />
    </div>
  );
};

export { Hero };