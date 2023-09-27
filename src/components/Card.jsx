import styles from "./Card.module.css";

const Card = ({ children }) => {
  //   console.log(children);
  return <div className={styles.card}>{children}</div>;
};

export default Card;
