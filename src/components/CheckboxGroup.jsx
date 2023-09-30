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
                        value={option}
                        onChange={onChange}
                        checked={value.includes(option)}
                    />
                    <label className={styles.checkbox}>{option}</label>
                </span>
            ))}
        </div>
    );
}

export default CheckboxGroup;
