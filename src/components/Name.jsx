const Name = ({ name, value, onChange }) => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="name"
        name={name}
        value={value}
        onChange={onChange}
      />
    </form>
  );
};
export default Name;
