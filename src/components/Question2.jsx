// src/components/Question2

export const Question2 = ({ musicYesNo, setMusicYesNo }) => {
  return (
    <div className="question2">
    <h3>Does music make you happy?</h3>
    <label>
      <input className="radio-btn"
        type="radio"
        value="yes"
        onChange={event => setMusicYesNo(event.target.value)}
        checked={musicYesNo === "yes"}
      />
    Yes, absolutely.
    </label>

      <label>
        <input className="radio-btn"
          type="radio"
          value="no"
          onChange={event => setMusicYesNo(event.target.value)}
          checked={musicYesNo === "no"}
        />
  
      No!!
      </label>
      </div>
  )
}