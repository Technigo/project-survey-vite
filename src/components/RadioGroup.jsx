import styles from "./RadioGroup.module.css"

const RadioGroup = ({
    name,
    value,
    onChange,
    options,
}) => {
    // Maping the options in our option list.
    return (
        <div className={styles.radioGroup} id={name}>
            {options.map((option) => (
                <span key={option}>
                    <input
                        type="radio"
                        id={option}
                        name={name}
                        value={option}
                        onChange={onChange}
                        checked={value === option}
                    />
                    <label className={styles.radio} htmlFor={option}>{option}</label>
                </span>
            ))}
        </div>
    );
}

export default RadioGroup;