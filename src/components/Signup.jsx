const Signup = ({ name, email, setFormValue }) => {
  // console.log(name, email, setFormValue);
  const handleChangeName = (e) => {
    setFormValue("name", e.target.value);
  };
  const handleChangeEmail = (e) => {
    setFormValue("email", e.target.value);
  };
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={handleChangeName}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="example@email.com"
        value={email}
        onChange={handleChangeEmail}
        id="email"
        name="email"
      />
    </form>
  );
};

export default Signup;
