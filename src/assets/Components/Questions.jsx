/* eslint-disable react/no-unescaped-entities */
import { FavQuestions } from "./FavQuestions";
import { InfoQuestions } from "./InfoQuestions";
import { Summary } from "./Summary";

export const Questions = () => {
  const handleSubmit = (e)=>{
    e.preventDefault()

  }
    return (
      <>
        {/* Add questions here */}
        <form action="" onSubmit={handleSubmit} required>
        <InfoQuestions />
          <FavQuestions />

        </form>
        
          
 
   
        <Summary />
      </>
      
    );
};