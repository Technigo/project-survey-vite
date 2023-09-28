const Select = ({
    name,
    value,
    onChange,
    options,
}) => {
    return (
        <select
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
