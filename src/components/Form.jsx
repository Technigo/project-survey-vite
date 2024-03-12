import { useState } from "react"
import PropTypes from "prop-types"

const Form = () => {
  const [name, setName] = useState("")
  const [ageGroup, setAgeGroup] = useState("")
  const [destination, setDestination] = useState("")
  const ageGroups = ["0-8", "19-30", "30+"]
  const [recommend, setRecommend] = useState("")
  const [reasonRec, setReasonRec] = useState("")
  const [purpose, setPurpose] = useState("")
  const [reasonPur, setReasonPur] = useState("")
  const [weatherConditions, setWeatherConditions] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState({})
  const [nameError, setNameError] = useState("")
  const [ageGroupError, setAgeGroupError] = useState("")
  const [destinationError, setDestinationError] = useState("")
  const [purposeError, setPurposeError] = useState("")
  const [weatherConditionsError, setWeatherConditionsError] = useState("")
  const [recommendError, setRecommendError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    let isValid = true

    if (!name) {
      setNameError("Name is required.")
      isValid = false
    } else {
      setNameError("")
    }

    if (!ageGroup) {
      setAgeGroupError("Age Group is required.")
      isValid = false
    } else {
      setAgeGroupError("")
    }

    if (!destination) {
      setDestinationError("Destination is required.")
      isValid = false
    } else {
      setDestinationError("")
    }

    if (!purpose) {
      setPurposeError("Purpose is required.")
      isValid = false
    } else if (purpose === "Something else" && !reasonPur) {
      setPurposeError("Please provide a reason for selecting 'Something else'.")
      isValid = false
    } else {
      setPurposeError("")
    }
    if (!weatherConditions) {
      setWeatherConditionsError("Weather conditions are required.")
      isValid = false
    } else {
      setWeatherConditionsError("")
    }

    if (!recommend) {
      setRecommendError("Recommendation is required.")
      isValid = false
    } else if (recommend === "No!" && !reasonRec) {
      setRecommendError("Please provide a reason for not recommending.")
      isValid = false
    } else {
      setRecommendError("")
    }

    if (isValid) {
      const data = {
        name,
        ageGroup,
        destination,
        recommend,
        reasonRec,
        purpose,
        reasonPur,
        weatherConditions,
      }
      setSubmittedData(data)
      setIsSubmitted(true)
    }
  }

  if (isSubmitted) {
    return (
      <div>
        <h1>Submission Confirmation</h1>
        <p>Name: {submittedData.name}</p>
        <p>Age Group: {submittedData.ageGroup}</p>
        <p>Destination: {submittedData.destination}</p>
        <p>Purpose: {submittedData.purpose}</p>
        {submittedData.purpose === "Something else" && (
          <p>Reason: {submittedData.reasonPur}</p>
        )}
        <p>Weather Conditions: {submittedData.weatherConditions}</p>
        <p>Recommendation: {submittedData.recommend}</p>
        {submittedData.recommend === "No!" && (
          <p>Reason: {submittedData.reasonRec}</p>
        )}
      </div>
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name:"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          {nameError && <div className="error-message">{nameError}</div>}
        </div>

        <div className="form-group">
          <h1>Age Group:</h1>
          {ageGroups.map((group) => (
            <label key={group}>
              <input
                type="radio"
                value={group}
                onChange={(event) => setAgeGroup(event.target.value)}
                checked={ageGroup === group}
              />
              {group}
            </label>
          ))}
          {ageGroupError && (
            <div className="error-message">{ageGroupError}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="destination">Where did you travel:</label>
          <input
            id="destination"
            type="text"
            placeholder="destination"
            onChange={(event) => setDestination(event.target.value)}
            value={destination}
          />
          {destinationError && (
            <div className="error-message">{destinationError}</div>
          )}
        </div>

        <div className="form-group">
          <h1>What was the purpose of the trip?</h1>
          <select
            value={purpose}
            onChange={(event) => setPurpose(event.target.value)}
          >
            <option value="">Select purpose</option>
            <option value="Business">Business</option>
            <option value="Vacation">Vacation</option>
            <option value="Something else">Something else</option>
          </select>
          {purpose === "Something else" && (
            <div>
              <label htmlFor="reasonPur">
                You selected something else, please write a purpose:
              </label>
              <input
                id="reasonPur"
                type="text"
                placeholder="Your answer:"
                onChange={(event) => setReasonPur(event.target.value)}
                value={reasonPur}
              />
            </div>
          )}
          {purposeError && <div className="error-message">{purposeError}</div>}
        </div>

        <div className="form-group">
          <h1>What type of weather conditions were the most common?</h1>
          <select
            value={weatherConditions}
            onChange={(event) => setWeatherConditions(event.target.value)}
          >
            <option value="">Select weather conditions</option>
            <option value="Sun">Sun</option>
            <option value="Cloudy">Cloudy</option>
            <option value="Rain">Rain</option>
            <option value="Snow">Snow</option>
          </select>
        </div>
        {weatherConditionsError && (
          <div className="error-message">{weatherConditionsError}</div>
        )}

        <div className="form-group">
          <h1>Would you recommend this place?</h1>
          <label>
            <input
              type="radio"
              value="Yes!"
              onChange={(event) => setRecommend(event.target.value)}
              checked={recommend === "Yes!"}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="No!"
              onChange={(event) => setRecommend(event.target.value)}
              checked={recommend === "No!"}
            />
            No
          </label>
          {recommend === "No!" && (
            <div>
              <label htmlFor="reasonRec">You selected No:</label>
              <input
                id="reasonRec"
                type="text"
                placeholder="Why?"
                onChange={(event) => setReasonRec(event.target.value)}
                value={reasonRec}
              />
            </div>
          )}
          {recommendError && (
            <div className="error-message">{recommendError}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func,
}

export default Form
