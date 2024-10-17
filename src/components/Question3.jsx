// src/components/Question3

export const Question3 = ({ happySong, setHappySong }) => {
  return (
    <div className="question3">
    <label><h3>What is your go-to happy song?</h3>

    <select
      onChange={event => setHappySong(event.target.value)}
      value={happySong}
      >
        <option value="">Select</option>
        <option value="A bar song (Tipsy) - Shaboozey">A Bar Song (Tipsy) - Shaboozey</option>
        <option value="Birds of a feather - Billie Eilish">Birds of a feather - Billie Eilish</option>
        <option value="Taste - Sabrina Carpenter">Taste - Sabrina Carpenter</option>
        <option value="Timeless - The Weeknd & Playboi Carti">Timeless - The Weeknd & Playboi Carti</option>
        <option value="Please Please Please - Sabrina Carpenter">Please please please - Sabrina Carpenter</option>
      </select></label>
      </div>
  )
}