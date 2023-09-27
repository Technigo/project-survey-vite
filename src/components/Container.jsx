import styles from "./Container.module.css";

const Container = ({ children }) => {
  //   console.log(children);
  return <div className={styles.container}>{children}</div>;
};

export default Container;
