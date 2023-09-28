
export const ResultPage = (formData) => {
    console.log("entered the ResultPage component")
    console.log(formData)
     {/* cant do this as it is an object, cant render object! {formData} */}

     function refreshPage() {
        window.location.reload(false);
      }

console.log(formData.formData.name);


    return (
        <>
        <section className="form-wrapper">
         
                <div className="output-survey q1">
                My name is {formData.formData.name} &#128515;
                  </div>
                  <div className="output-survey q2">
                  I am {formData.formData.age} years old
                  </div>
                  <div className="output-survey q3">
                  I am in class {formData.formData.classroom} 
                  </div>
                  <div className="output-survey q4">
                  My favourite dinosaur is a {formData.formData.favDinosaur} 
                  </div>
                  <div className="output-survey q5">
                  &#127829; My favourite food is {formData.formData.favFood}
                  </div> 
        </section>
        <section>
        <button onClick={refreshPage}>Start again</button>
        </section>
       </>        
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
