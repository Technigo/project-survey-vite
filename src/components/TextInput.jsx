import styles from "./TextInput.module.css";

const TextInput = ({
    name,
    value,
    onChange,
    placeholder,
}) => {
    return (
        <input
            className={styles.textInput}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export default TextInput;
