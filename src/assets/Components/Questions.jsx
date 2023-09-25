/* eslint-disable react/no-unescaped-entities */
import { Summary } from "./Summary";

export const Questions = () => {
    return (
      <>
        {/* Add questions here */}
        
        <form action="" className="health-form" required>
            <label htmlFor="name"> What's your name?
                <input type="text" id="name" name="name" placeholder="your name"/>
            </label>
            <label htmlFor="email"> what's your Email address?
                <input type="email" id="email" name="email" placeholder="your Email"/>
            </label>
            <div className="radio-question">What is your favourite exercise?
           
            <label htmlFor="walking">Walking
            <input type="radio" name="walking" id="walking" /> 
              
            </label>
            <label htmlFor="running">Running
            <input type="radio" name="running" id="running" />
              
            </label>
            <label htmlFor="gym"> Going to GYM
            <input type="radio" name="gym" id="gym" />
              
            </label>
            <label htmlFor="swimming">Swimming
            <input type="radio" name="swimming" id="swimming" /> 
              
            </label>
            <label htmlFor="other">Other
            <input type="radio" name="other" id="other" /> 

            </label>
                
                
                
                
                
            </div>
          </form>
        <Summary />
      </>
      
    );
};