
export const ResultPage = (formData) => {
    console.log("entered the ResultPage component")
    return (
        <section className="output-survey">
            Results page appears here!
            {/* cant do this as it is an object, cant render object! {formData} */}

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
