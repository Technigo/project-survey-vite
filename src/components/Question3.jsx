export const Question3 = ({ happySong, setHappySong }) => {
  return (
    <>
    <h3>What is your go-to happy song?</h3>

    <select
      onChange={event => setHappySong(event.target.value)}
      value={happySong}
      >
        <option value="">Select</option>
        <option value="a bar song">A Bar Song (Tipsy) - Shaboozey</option>
        <option value="birds of a feather">Birds of a feather - Billie Eilish</option>
        <option value="taste">Taste - Sabrina Carpenter</option>
        <option value="timeless">Timeless - The Weeknd & Playboi Carti</option>
        <option value="please please please">Please please please - Sabrina Carpenter</option>
      </select>
      </>
  )
}