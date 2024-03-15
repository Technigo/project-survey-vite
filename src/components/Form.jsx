import "./Form.css";



export const Form = ({ value, setValue, mood, setMood, song, setSong, setShowSummary }) => {



  const handleSubmit = (event) => {
      event.preventDefault()
      setShowSummary(true)
    }


  const handleChange = (event) => {

    setValue(event.target.value);          
  }
  
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="star"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100">
        <path fill="#d48247" d="M12 1l2.5 7.4h7.9l-6.4 4.9 2.5 7.4-6.5-4.9-6.4 4.9 2.5-7.4-6.4-4.9h7.9z"/>
        </svg>
      </div>
      <div className="form-wrapper">
      <div className="question-container">
        <span className="count">1.</span>
        <h3>What is your favorite mood-boosting activity?</h3>
        <label>
          <input
            type="text"
            name="questionOne"
            placeholder="Write your answer here..."
            value={value}
            onChange={event => setValue(event.target.value)}
            required
          />
        </label>
      </div>

      <div className="question-container question-two">
      <span className="count">2.</span>
      <h3>Does music make you happy?</h3>
      <label className={`radio-button ${mood === 'Yes' ? 'checked' : ''}`}>
        Yes, absolutely
        <input
          type="radio"
          value="Yes"
          name="questionTwo"
          onChange={event => setMood("You love music, that's lovely")}
          checked={mood === "Yes"}
        />
      </label>
      <label className={`radio-button ${mood === 'No' ? 'checked' : ''}`}>
        No, I like the silence
        <input
          type="radio"
          value="No"
          name="questionTwo"
          onChange={event => setMood("You don't like music? They say silence is golden.")}
          checked={mood === "No"}
        />
      </label>
    </div>

    <div className="question-container">
      <span className="count">3.</span>
      <h3>What is your go-to happy song?</h3>
      <select 
        aria-label="QuestionThree"
        name="questionThree"
        onChange={(event) => setSong(event.target.value)}
        value={song}
        required
      >
        <option disabled value="">Select a song</option>
        <option value="“Happy” by Pharrell Williams">“Happy” by Pharrell Williams</option>
        <option value="Don't Worry, Be Happy by Bobby McFerrin">"Don't Worry, Be Happy" by Bobby McFerrin</option>
        <option value="Walking on Sunshine by Katrina and the Waves">"Walking on Sunshine" by Katrina and the Waves</option>
      </select>
    </div>
    <button type="submit">Submit your answers</button>
    </div>
    </form>
    );
  };
  