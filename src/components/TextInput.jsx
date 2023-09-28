const TextInput = ({
    name,
    value,
    label,
    onChange,
    placeholder,
}) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    );
};

export default TextInput;
