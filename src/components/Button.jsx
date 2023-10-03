import styles from "./Button.module.css"

const Button = ({ onClick, children, disabled }) => {
    return (
        <button
            disabled={disabled}
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;