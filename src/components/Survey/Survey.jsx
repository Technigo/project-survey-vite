import {Name} from './Name/Name'
import {Activity} from './Activity/Activity'
import {When} from './When/When'
import './survey.css'

export const Survey = () => {
  return (
    <div className="survey-container">
      <Name/>
      <Activity/>
      <When/>
    
    </div>
  )
}
