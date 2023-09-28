export const Name = ({ name, value, onChange }) => {
  console.log(name, onChange);

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

export const Email = ({ name, value, onChange }) => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="example@email.com"
        value={value}
        onChange={onChange}
        id="email"
        name={name}
      />
    </form>
  );
};
