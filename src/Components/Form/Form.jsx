import { useState } from "react"
import Welcome from "/src/Components/Welcome/Welcome"
import Text from "/src/Components/Input/Text/Text"
import Radio from "/src/Components/Input/Radio/Radio"
import Dropdown from "../Input/DropDown/DropDown"
import "./form.css"

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    ageGroup: "",
    destination: "",
    recommend: "",
    reasonRec: "",
    purpose: "",
    reasonPur: "",
    weatherConditions: "",
    errors: {},
    isSubmitted: false,
    submittedData: {},
    isSubmittedAttempted: false,
  })
  const [showReasonPur, setShowReasonPur] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const ageGroups = ["0-18", "19-30", "30+"]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }))
  }

  const validateForm = () => {
    let errors = {}
    if (!formState.name || formState.name.trim().length < 2) {
      errors.name = "Name must be at least two characters long."
    }
    if (!formState.ageGroup) {
      errors.ageGroup = "Age Group is required."
    }
    if (!formState.destination || formState.destination.trim().length < 2) {
      errors.destination = "Destination must be at least two characters long."
    }
    if (!formState.purpose) {
      errors.purpose = "Purpose is required."
    } else if (formState.purpose === "Something else") {
      if (!formState.reasonPur || formState.reasonPur.trim().length < 2) {
        errors.reasonPur =
          "Please provide a reason for selecting 'Something else'."
      }
    }
    if (!formState.weatherConditions) {
      errors.weatherConditions = "Weather conditions are required."
    }
    if (!formState.recommend) {
      errors.recommend = "Recommendation is required."
    } else if (formState.recommend === "No!" && !formState.reasonRec) {
      errors.reasonRec = "Please provide a reason for not recommending."
    }
    return errors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const errors = validateForm()
    if (Object.keys(errors).length === 0) {
      const data = {
        name: formState.name,
        ageGroup: formState.ageGroup,
        destination: formState.destination,
        recommend: formState.recommend,
        reasonRec: formState.reasonRec,
        purpose: formState.purpose,
        reasonPur: formState.reasonPur,
        weatherConditions: formState.weatherConditions,
      }
      setFormState((prevState) => ({
        ...prevState,
        isSubmitted: true,
        submittedData: data,
      }))
    } else {
      setFormState((prevState) => ({
        ...prevState,
        errors,
        isSubmittedAttempted: true,
      }))
    }
  }

  const handleContinue = () => {
    setShowForm(true)
  }

  if (formState.isSubmitted) {
    return (
      <div className="summary-container">
        <h2 className="summary-title">Thank you for your submission!</h2>
        <h3>A summary of your answers:</h3>
        <div className="answers">
          <p>Name: {formState.submittedData.name}</p>
          <p>Age Group: {formState.submittedData.ageGroup}</p>
          <p>Destination: {formState.submittedData.destination}</p>
          <p>Purpose: {formState.submittedData.purpose}</p>
          {formState.submittedData.purpose === "Something else" && (
            <p>Reason: {formState.submittedData.reasonPur}</p>
          )}
          <p>Weather Conditions: {formState.submittedData.weatherConditions}</p>
          <p>Recommendation: {formState.submittedData.recommend}</p>
          {formState.submittedData.recommend === "No!" && (
            <p>Reason: {formState.submittedData.reasonRec}</p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      {!showForm ? (
        <div className="welcome-container">
          <Welcome onClick={handleContinue} />
        </div>
      ) : (
        <div className="form-container">
          {!formState.isSubmittedAttempted && (
            <p className="form-prompt">Please fill in the form.</p>
          )}

          <form onSubmit={handleSubmit}>
            <Text
              name="name"
              label="Your name:"
              placeholder="Name:"
              autoComplete="name"
              onChange={handleChange}
              value={formState.name}
              error={formState.errors.name}
            />
            <Radio
              name="ageGroup"
              value={formState.ageGroup}
              onChange={handleChange}
              listOfItems={ageGroups}
              label="Age group"
              error={formState.errors.ageGroup}
            />

            <Text
              name="destination"
              label="Your destination:"
              placeholder="destination:"
              onChange={handleChange}
              value={formState.destination}
              error={formState.errors.destination}
            />
            {!showReasonPur ? (
              <Dropdown
                name="purpose"
                options={[
                  { value: "", label: "Select purpose:" },
                  { value: "Business", label: "Business" },
                  { value: "Vacation", label: "Vacation" },
                  { value: "Something else", label: "Something else" },
                ]}
                label="What was the purpose of the trip"
                value={formState.purpose}
                onChange={handleChange}
                error={formState.errors.purpose}
                onOptionChange={(show) => setShowReasonPur(show)}
              />
            ) : (
              <Text
                name="reasonPur"
                label="Reason for selecting 'Something else':"
                placeholder="write your purpose:"
                onChange={handleChange}
                value={formState.reasonPur}
                error={formState.errors.reasonPur}
              />
            )}
            <Dropdown
              name="weatherConditions"
              options={[
                { value: "", label: "Weather conditions:" },
                { value: "Sun", label: "Sun" },
                { value: "Cloudy", label: "Cloudy" },
                { value: "Rain", label: "Rain" },
                { value: "Snow", label: "Snow" },
              ]}
              label="Weather condition"
              value={formState.weatherConditions}
              onChange={handleChange}
              error={formState.errors.weatherConditions}
            />
            <Radio
              name="recommend"
              listOfItems={["Yes!", "No!"]}
              label="Would you recommend this place"
              value={formState.recommend}
              onChange={handleChange}
              error={formState.errors.recommend}
            />
            {formState.recommend === "No!" && (
              <Text
                name="reasonRec"
                label="You selected No:"
                placeholder="write your purpose:"
                onChange={handleChange}
                value={formState.reasonRec}
                error={formState.errors.reasonRec}
              />
            )}
            <div className="submit-button-container">
              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
