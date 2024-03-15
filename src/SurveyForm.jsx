import { useState } from 'react'
import { TextInput } from './TextInput'
import { SelectOption } from './SelectOption'
import { RadioButtons } from './RadioButtons'
import { RangeSlider } from './RangeSlider'
import { SurveySummary } from './SurveySummary'
import './SurveyForm.css'

// Array containing static data = data that does not change during the execution of a program / using any component props or state
// 1. Put outside component (Global scope)
// 2. Use uppercase (STEP)
const STEPS = [
	{
		Component: TextInput,
		valueKey: 'tvShow',
		question: 'What’s your guilty pleasure TV show?',
		answerRequired: true,
	},
	{
		Component: SelectOption,
		valueKey: 'harryPotter',
		question: 'Which Harry Potter house best describes your values?',
		options: [
			{ name: 'Gryffindor for bravery', valueKey: 'gryffindor' },
			{ name: 'Hufflepuff for patience', valueKey: 'hufflepuff' },
			{ name: 'Ravenclaw for wit', valueKey: 'ravenclaw' },
			{ name: 'Slytherin for ambition', valueKey: 'slytherin' },
		],
		answerRequired: true,
	},
	{
		Component: RadioButtons,
		valueKey: 'loudOrNoisy',
		question: 'Loud talker or a noisy eater?',
		options: [
			{ name: 'Loud talker', valueKey: 'loud' },
			{ name: 'Noisy eater', valueKey: 'noisy' },
		],
		answerRequired: true,
	},
	{
		Component: RangeSlider,
		valueKey: 'summer',
		question: 'How much do you want summer right now?',
		min: 0,
		max: 100,
		step: 1,
		answerRequired: true,
	},
]

//Functional component with state-hook for data
export const SurveyForm = () => {
	const [surveyData, setSurveyData] = useState({
		tvShow: '',
		harryPotter: '',
		loudOrNoisy: '',
		goodKid: '',
		summer: 0,
	})

	// The initial value is quesiton no.1
	const [currentStep, setCurrentStep] = useState(0)
	//Checks to see if state still is 0 or if user has submitted
	const [submit, setSubmit] = useState(false)

	const [error, setError] = useState(null)

	//Updating data
	const currentStepDetails = STEPS[currentStep]
	const currentStepValue = surveyData[currentStepDetails.valueKey]

	// Function to update survey data
	const updateSurveyData = (key, value) => {
		setSurveyData((values) => ({ ...values, [key]: value }))
		// resets any error that might have occurred, returning to a state where there are no errors
		setError(null)
	}

	// When currentStep is more than 0, prevStep is (currentStep - 1)
	const prevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1)
			setError(null)
		}
	}

	// if "currentStepDetails.answerRequired" means it is true (required to answer) AND "!currentStepValue! means it is false = empty -> error shows up
	const nextStep = () => {
		if (currentStepDetails.answerRequired && !currentStepValue) {
			setError('Hey! You forgot to answer!')
			return
		}

		// Conditional statement to check if user can move forward or not
		// currentStep < STEPS.length - 1 = check user is in last step or not
		const canMoveForward = currentStep < STEPS.length - 1
		if (canMoveForward) {
			setCurrentStep(currentStep + 1)
			setError(null)
		}
	}

	// Function to mark the survey as submitted
	const submitSurvey = () => {
		setSubmit(true)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<>
			{submit ? (
				<SurveySummary surveyData={surveyData} steps={STEPS} />
			) : (
				<form className="form" onSubmit={handleSubmit}>
					<div className="questions">
						<currentStepDetails.Component
							value={surveyData[currentStepDetails.valueKey]}
							updateSurveyData={updateSurveyData}
							{...currentStepDetails}
						/>
					</div>
					<div className="button">
						{currentStep > 0 && (
							<button
								style={{ backgroundColor: '#0018A4', color: '#ffffff' }}
								onClick={prevStep}>
								Back
							</button>
						)}
						{currentStep < STEPS.length - 1 ? (
							<button
								style={{ backgroundColor: '#0018A4', color: '#ffffff' }}
								onClick={nextStep}>
								Continue
							</button>
						) : (
							<button
								style={{ backgroundColor: '#0018A4', color: '#ffffff' }}
								onClick={submitSurvey}>
								Submit
							</button>
						)}
					</div>
					<div>{error && <p>Error: {error}</p>}</div>
					<div className="donut-img">
						<img src="/pinkdonut.png" alt="pink donut with sprinkles" />
					</div>
				</form>
			)}
		</>
	)
}
