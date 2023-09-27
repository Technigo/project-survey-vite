
export const ResultPage = (formData) => {
    console.log("entered the ResultPage component")
     {/* cant do this as it is an object, cant render object! {formData} */}
    return (
        <section className="form-wrapper">
         
                <div className="output-survey q1">
                 Question 1 - Name  
                  </div>
                  <div className="output-survey q2">
                  Question 2  - Age
                  </div>
                  <div className="output-survey q3">
                  Question 3  - Class  
                  </div>
                  <div className="output-survey q4">
                  Question 4 - Dinosaur 
                  </div>
                  <div className="output-survey q5">
                  Question 5 - Food 
                  </div>
                   
        </section>
    )
}


// return (
    //         <div className="main-body">SurveyForm
   //             <div className="form-wrapper">
    //                 {/* form wrapper div here - grid parent */}
    //                 <div className="output-survey">
     //                     {/* grid children go in here to display the output of the survery - appears when submit button is pressed */}
    //                 </div>
    //             </div>
    //         </div>
    
    //     )
