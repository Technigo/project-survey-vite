/* eslint-disable react/no-unescaped-entities */
import { FavQuestions } from "./FavQuestions";
import { InfoQuestions } from "./InfoQuestions";
import { Summary } from "./Summary";

export const Questions = () => {
    return (
      <>
        {/* Add questions here */}
        
          <InfoQuestions />
          <FavQuestions />
 
   
        <Summary />
      </>
      
    );
};