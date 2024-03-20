export const Form = ({ name, setName, age, setAge, setShowSummary}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowSummary(true)
    }

    return (
      <form onSubmit={handleSubmit}>
          <div>
             <label htmlFor="nameInput">name:</label>
             <input id="nameInput" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required></input>
          </div>

          <div>
             <label htmlFor="ageInput">age:</label>
             <input id="ageInput" name="age" type="number" value={age} onChange={(e) => setAge(e.target.value)} required></input>
          </div>

          <div>
             <p>What is the best thing about Easter?</p>
             <label><input type='radio' name="best_thing" value="Church"></input>Visiting church</label>
             <label><input type='radio' name="best_thing" value="EggHunt"></input>Go egg hunting</label>
             <label><input type='radio' name="best_thing" value="PaintEggs"></input>To paint eggs</label>
             <label><input type='radio' name="best_thing" value="Eating"></input>Eating delicious Easter food</label>
          </div>

          <div>
             <p>What is your favourite holiday?</p>
             <select required>
               <option value="">Select favourite holiday</option>
               <option value="christmas">Christmas</option>
               <option value="easter">Easter</option>
               <option value="midsummer">Midsummer</option>
             </select>
          </div>

          <button type="submit">Submit form</button>
      </form>
    )
}
