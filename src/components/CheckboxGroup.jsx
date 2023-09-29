const CheckboxGroup = ({
    name,
    value,
    onChange,
    options,
}) => {
    // Maping the options in our option list.
    return (
        <>
            {options.map((option) => (
                <span key={option}>
                    <input
                        type="checkbox"
                        name={name}
                        value={option}
                        onChange={onChange}
                        checked={value.includes(option)}
                    />
                    <label>{option}</label>
                </span>
            ))}
        </>
    );
}

export default CheckboxGroup;
