import { SurveyForm } from './SurveyForm'
import { Header } from './Header'
import { Footer } from './Footer'
import './App.css'
import './SurveyForm.css'

export const App = () => {
	return (
		<body className="wrapper">
			<Header />
			<div className="survey-form">
				<SurveyForm />
			</div>
			<Footer />
		</body>
	)
}
