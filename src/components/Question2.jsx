export const Question2 = ({ musicYesNo, setMusicYesNo }) => {
  return (
    <>
    <h3>Does music make you happy?</h3>
    <label>
      <input
        type="radio"
        value="yes"
        onChange={event => setMusicYesNo(event.target.value)}
        checked={musicYesNo === "yes"}
      />
    Yes, absolutely.
    </label>

      <label>
        <input
          type="radio"
          value="no"
          onChange={event => setMusicYesNo(event.target.value)}
          checked={musicYesNo === "no"}
        />
  
      No!!
      </label>
      </>
  )
}