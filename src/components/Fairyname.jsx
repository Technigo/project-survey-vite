export const Fairyname = ({ fairyName, setFairyName, onProceed }) => {
  const handleFairyName = (event) => {
    setFairyName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onProceed();  // Notify the parent to move to the next step
  }

  return (
    <form className="fairy-name-from" onSubmit={handleSubmit}>
      tell me what is in yr head
      <input 
        aria-label="fairytale name input" 
        type="text" 
        required 
        value={fairyName} 
        onChange={handleFairyName} 
      />
    </form>
  );
}
