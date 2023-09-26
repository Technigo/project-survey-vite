export const NameQuestion = ({ value, setValue }) => {

    const [name, setName] = [value, setValue]

    return (
        <label> What's your name? 
        <input 
            placeholder="Name here..."
            type="text"
            onChange={event => setName(event.target.value)}
            value={name}
        />
        </label>
    )
}