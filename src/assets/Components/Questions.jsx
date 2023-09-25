/* eslint-disable react/no-unescaped-entities */
import { Summary } from "./Summary";

export const Questions = () => {
    return (
      <>
        {/* Add questions here */}
        
        <form action="" className="health-form" required>
            <label htmlFor=""> What's your name?
                <input type="text" placeholder="your name"/>
            </label>
            <label htmlFor=""> what's your Email address?
                <input type="email" placeholder="your Email"/>
            </label>
            <label htmlFor="">What is your favourite exercise?
                <input type="radio" name="" id="" /> Walking
                <input type="radio" name="" id="" />Running
                <input type="radio" name="" id="" /> Going to GYM
                <input type="radio" name="" id="" /> Swimming
                <input type="radio" name="" id="" /> Other
            </label>
          </form>
        <Summary />
      </>
      
    );
};