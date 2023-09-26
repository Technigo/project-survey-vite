import "./ChooseCat.css";

const cats = [
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
  "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1315&q=80",
  "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80",
  "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
];

export const ChooseCat = ({ chooseCat, setChooseCat }) => {
  const handleChooseCats = (event) => {
    setChooseCat(event.target.value);
  };
  return (
    <form
      className="chooseCat-form"
      onSubmit={(event) => event.preventDefault()}
      required
    >
      <h3>Choose your cat</h3>
      <label className="flex">
        <input type="radio" className="cat-button" onChange={handleChooseCats} />
        <img src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" alt="" />
        
        <input type="radio" className="cat-button" onChange={handleChooseCats} />
        <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1315&q=80" alt="" />

        <input type="radio" className="cat-button" onChange={handleChooseCats} />
        <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80" alt="" />
        
        <input type="radio" className="cat-button" onChange={handleChooseCats} />
        <img src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" alt="" />
      </label>

      {/* {cats.map((cat) => (
        <>
          <input
            key={cat}
            id="catBtn"
            type="radio"
            className="cat-button"
            value={cat}
            onChange={handleChooseCats}
            checked={cat === chooseCat}
          />

          <label htmlFor="catBtn">
            <img src={cat} alt="" />
          </label>
        </>
      ))} */}
    </form>
  );
};
