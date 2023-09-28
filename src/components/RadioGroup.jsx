const RadioGroup = ({
    name,
    value,
    onChange,
    options,
}) => {
    return (
        <>
            {options.map((option) => (
                <>
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        onChange={onChange}
                        checked={value === option}
                    />
                    <label>{option}</label>
                </>
            ))}
        </>
    );
}

export default RadioGroup;