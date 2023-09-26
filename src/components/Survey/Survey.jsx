import {useState} from 'react'
import {Name} from './Name/Name'
import {Activity} from './Activity/Activity'
import {When} from './When/When'
import './survey.css'

export const Survey = () => {

  //From Diego's
const [formData, setFormData] = useState({
  name: "",
  activity: "",
  when: "",
})
console.log(formData)

const updateFormData = (field, value) => {
  setFormData((previous) => ({...previous, [field]: value}));
};
//



  
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
