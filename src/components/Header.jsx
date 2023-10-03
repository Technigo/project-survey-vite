import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
            <img src="/mushroom.jpg" alt="Image of a mushroom" />
            <div className={styles.headerContent}>
                <h4>
                    In this survey we would like you to answer a couple of questions
                    regarding mushrooms.
                </h4>
            </div>
        </div>
    );
};

export default Header;