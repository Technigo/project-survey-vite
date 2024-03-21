export const Form = ({ name, setName, age, setAge,  celebrate, setCelebrate, best, setBest, holiday, setHoliday, setShowSummary }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowSummary(true)
    }

    return (
      <form onSubmit={handleSubmit}>
          <div>
             <label htmlFor="nameInput">name:</label>
             <input id="nameInput" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required></input>
          </div>

          <div>
             <label htmlFor="ageInput">age:</label>
             <input id="ageInput" name="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Your age" required></input>
          </div>

          <div className="celebrate" value={celebrate} onChange={(e) => setCelebrate(e.target.value)}>
             <p>Do you celebrate Easter?</p>
             <label htmlFor="yesInput"><input id="yesInput" name="radio-group" type='radio' value="celebrate" required></input>Yes</label>
             <label htmlFor="noInput"><input id="noInput" name="radio-group" type='radio' value="do not celebrate" required></input>No</label>
          </div>

          <div className="best">
             <p>What is the best thing about Easter?</p>
             <select id="bestInput" name="best" value={best} onChange={(e) => setBest(e.target.value)} required>
               <option value="" disabled>Select option</option>
               <option value="visit church">Visiting church</option>
               <option value="go egg hunting">Go egg hunting</option>
               <option value="paint eggs">Paint eggs</option>
               <option value="eat good food">Eating delicious Easter food</option>
               <option value="do other activities">Other activities</option>
             </select>
          </div>

          <div className="holidays">
             <p>What is your favourite holiday?</p>
             <select id="holidayInput" name="holiday" value={holiday} onChange={(e) => setHoliday(e.target.value)} required>
               <option value="" disabled>Select favourite holiday</option>
               <option value="Christmas">Christmas</option>
               <option value="Easter">Easter</option>
               <option value="Midsummer">Midsummer</option>
               <option value="New Years">New Years</option>
               <option value="some other holiday">Other holiday</option>
             </select>
          </div>

          <button type="submit">Submit form</button>
      </form>
    )
}