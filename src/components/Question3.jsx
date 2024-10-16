// src/components/Question3

export const Question3 = ({ happySong, setHappySong }) => {
  return (
    <div className="question3">
    <h3>What is your go-to happy song?</h3>

    <select
      onChange={event => setHappySong(event.target.value)}
      value={happySong}
      >
        <option value="">Select</option>
        <option value="A bar song">A Bar Song (Tipsy) - Shaboozey</option>
        <option value="Birds of a feather">Birds of a feather - Billie Eilish</option>
        <option value="Taste">Taste - Sabrina Carpenter</option>
        <option value="Timeless">Timeless - The Weeknd & Playboi Carti</option>
        <option value="Please Please Please">Please please please - Sabrina Carpenter</option>
      </select>
      </div>
  )
}