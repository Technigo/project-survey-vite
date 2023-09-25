import { Questions } from "./Questions"


export const Header = () => {
  return (
    <div className="survey-container">
          <div className="form-container">
          <h1 className="header-text">Health and wellness</h1>
          <p>let us know about your wellness</p>
          
          <Questions />
          </div>
        
       
    </div>
  )
}
