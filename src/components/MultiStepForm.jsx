import React, { useState } from 'react'
import '../index.css'

function MultiStepForm () {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    job: ''
  })

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    // You can handle the form submission here, for example, sending the data to an API or displaying it in the console.
    console.log(formData)
  }

  return (
    <div>
      <h1>Technigo Survey Form </h1>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <label>What is your name?</label>
            <input
              type='text'
              value={formData.name}
              onChange={e => handleChange('name', e.target.value)}
            />
          </div>
        )}
        {step === 2 && (
          <div>
            <label>What is your age?</label>
            <input
              type='number'
              value={formData.age}
              onChange={e => handleChange('age', e.target.value)}
            />
          </div>
        )}
        {step === 3 && (
          <div>
            <label>What is your Email?</label>
            <input
              type='email'
              value={formData.email}
              onChange={e => handleChange('email', e.target.value)}
            />
          </div>
        )}
        {step === 4 && (
          <div>
            <label>What is your current job?</label>
            <input
              type='text'
              value={formData.name}
              onChange={e => handleChange('name', e.target.value)}
            />
          </div>
        )}
        {step === 5 && (
          <div>
            <label>Select the course you did with us?</label>
            <select
              value={formData.selectedCourse}
              onChange={e => handleChange('selectedCourse', e.target.value)}
            >
              <option value=''>Select a course</option>
              <option value='course1'>Javascript and React</option>
              <option value='course2'>UX/UI</option>
              <option value='course3'>Frontend bootcamp</option>
              <option value='course3'>Python</option>
              <option value='course3'>C++</option>
              <option value='course3'>CAD</option>
              <option value='course3'>C#</option>
              <option value='course3'>Java</option>
            </select>
          </div>
        )}

        {step === 6 && (
          <div>
            <label>In which city did you do your course?</label>
            <div>
              <label>
                <input
                  type='radio'
                  name='courseCity'
                  value='Stockholm'
                  checked={formData.courseCity === 'Stockholm'}
                  onChange={e => handleChange('courseCity', 'Stockholm')}
                />
                Stockholm
              </label>
            </div>
            <div>
              <label>
                <input
                  type='radio'
                  name='courseCity'
                  value='Gothenburg'
                  checked={formData.courseCity === 'Gothenburg'}
                  onChange={e => handleChange('courseCity', 'Gothenburg')}
                />
                Gothenburg
              </label>
            </div>
            <div>
              <label>
                <input
                  type='radio'
                  name='courseCity'
                  value='Malmö'
                  checked={formData.courseCity === 'Malmö'}
                  onChange={e => handleChange('courseCity', 'Malmö')}
                />
                Malmö
              </label>
            </div>
            <div>
              <label>
                <input
                  type='radio'
                  name='courseCity'
                  value='Norrköping'
                  checked={formData.courseCity === 'Norrköping'}
                  onChange={e => handleChange('courseCity', 'Norrköping')}
                />
                Norrköping
              </label>
            </div>
            <div>
              <label>
                <input
                  type='radio'
                  name='courseCity'
                  value='Umeå'
                  checked={formData.courseCity === 'Umeå'}
                  onChange={e => handleChange('courseCity', 'Umeå')}
                />
                Umeå
              </label>
            </div>
          </div>
        )}

        {step === 7 && (
          <div>
            <label>What was the name of your Technigo team?</label>
            <select
              value={formData.technigoTeam}
              onChange={e => handleChange('technigoTeam', e.target.value)}
            >
              <option value=''>Select a team</option>
              <option value='Team A'>Team Banana</option>
              <option value='Team B'>Team Grape</option>
              <option value='Team C'>Team Watermelon</option>
              <option value='Team C'>Team Pineapple</option>
              <option value='Team C'>Team Cherry</option>
              <option value='Team C'>Team Mango</option>
            </select>
          </div>
        )}

        {step === 8 && (
          <div>
            <label>How much rating you want to give us?</label>
            <input
              type='range'
              min='1'
              max='10'
              step='1'
              value={formData.rating}
              onChange={e => handleChange('rating', e.target.value)}
            />
            <span>{formData.rating}</span>
          </div>
        )}

        {step === 9 && (
          <div>
            <label>How did you know about us?</label>
            <input
              type='text'
              value={formData.name}
              onChange={e => handleChange('name', e.target.value)}
            />
          </div>
        )}
        <div>
          {step > 1 && (
            <button type='button' onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 9 ? (
            <button type='button' onClick={nextStep}>
              Next
            </button>
          ) : (
            <button type='submit'>Submit</button>
          )}
        </div>
      </form>
    </div>
  )
}

export default MultiStepForm
