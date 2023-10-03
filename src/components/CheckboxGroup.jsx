import styles from "./CheckboxGroup.module.css"

const CheckboxGroup = ({
    name,
    value,
    onChange,
    options,
}) => {
    // Maping the options in our option list.
    return (
        <div className={styles.checkboxGroup} id={name}>
            {options.map((option) => (
                <span key={option}>
                    <input
                        type="checkbox"
                        name={name}
                        id={option}
                        value={option}
                        onChange={onChange}
                        checked={value.includes(option)}
                    />
                    <label className={styles.checkbox} htmlFor={option}>{option}</label>
                </span>
            ))}
        </div>
    );
}

export default CheckboxGroup;
