import {Name} from './Name/Name'
import {Activity} from './Activity/Activity'
import {When} from './When/When'
import './survey.css'

export const Survey = () => {
  return (
    <div className="survey-container">
      {/* adding default for onSubmit - look into deeper later on  */}
      <form onSubmit={event=> event.preventDefault()}>
      <Name/>
      <Activity/>
      <When/>
      </form>
    
    </div>
  )
}
