import style from "./Secondaryheading.module.css";
export const SecondaryHeading = ({ question }) => {
  return <h2 className={style.heading}>{question}</h2>;
};
