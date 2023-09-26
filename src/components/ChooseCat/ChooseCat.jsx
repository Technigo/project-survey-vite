import "./ChooseCat.css";

const catOptions = [
  {
    id: "cat1",
    alt: "Cat 1",
    imgSrc: "src/assets/cat-1.jpeg",
  },
  {
    id: "cat2",
    alt: "Cat 2",
    imgSrc: "src/assets/cat-2.jpeg",
  },
  {
    id: "cat3",
    alt: "Cat 3",
    imgSrc: "src/assets/cat-3.jpeg",
  },
  {
    id: "cat4",
    alt: "Cat 4",
    imgSrc: "src/assets/cat-4.jpeg",
  },
];

export const ChooseCat = ({ chooseCat, setChooseCat }) => {
  const handleChooseCats = (event) => {
    setChooseCat(event.target.value);
  };

  return (
    <form>
      <h3>Choose your cat</h3>
      {/* This div with classname flex is only for my eyes sake */}
      <div className="flex">
        {catOptions.map((catOption) => (
          <>
            <label key={catOption.id}>
              <input
                type="radio"
                value={catOption.id}
                checked={chooseCat === catOption.id}
                onChange={handleChooseCats}
              />
              <div className="radio-custom">
                <img src={catOption.imgSrc} alt={catOption.alt} />
              </div>
            </label>
          </>
        ))}
      </div>
    </form>
  );
};

// export const ChooseCat = ({ chooseCat, setChooseCat }) => {
//   const handleChooseCats = (event) => {
//     setChooseCat(event.target.value);
//   };
//   return (
//     <form
//       className="chooseCat-form"
//       onSubmit={(event) => event.preventDefault()}
//       required
//     >
//       <h3>Choose your cat</h3>
//       <label className="flex">
//         <input type="radio" className="cat-button" onChange={handleChooseCats} />
//         <img src="src/assets/cat-1.jpeg" alt="" />

//         <input type="radio" className="cat-button" onChange={handleChooseCats} />
//         <img src="src/assets/cat-2.jpeg" alt="" />

//         <input type="radio" className="cat-button" onChange={handleChooseCats} />
//         <img src="src/assets/cat-3.jpeg" alt="" />

//         <input type="radio" className="cat-button" onChange={handleChooseCats} />
//         <img src="src/assets/cat-4.jpeg" alt="" />
//       </label>
//     </form>
//   );
// };
