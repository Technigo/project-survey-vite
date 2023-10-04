import style from "./Hero.module.css";
const Hero = ({ step }) => {
  // Destructure "step" from props
  // Get the current step from the MultiStepForm
  const currentStage = step;
  console.log(currentStage);
  let backgroundClass;
  if (step === 1) {
    backgroundClass = style.step1img;
  } else if (step === 2) {
    backgroundClass = style.step2img;
  } else if (step === 3) {
    backgroundClass = style.step3img;
  } else if (step === 4) {
    backgroundClass = style.step4img;
  } else {
    backgroundClass = style.step5img;
  }
  return (
    <div className={`${backgroundClass}  ${style.imageContainer}`}>
    </div>
  );
};
export { Hero };
