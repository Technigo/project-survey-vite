import styles from "./Select.module.css"

const Select = ({
    name,
    value,
    onChange,
    options,
}) => {
    return (
        <select
            id={name}
            className={styles.select}
            name={name}
            value={value}
            onChange={onChange}
        >
            <option value="" disabled>Please choose an option</option>
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    );
};

export default Select;
