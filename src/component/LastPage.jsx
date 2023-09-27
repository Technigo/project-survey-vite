export const LastPage = ({ information }) => {
  let { name, age, preference, spirit } = information;

  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Preference: {preference}</p>
      <p>Spirit: {spirit}</p>
    </>
  );
};
