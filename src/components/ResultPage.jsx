
export const ResultPage = (formData) => {

    //function for Start Again button to refresh page
    function refreshPage() {
        window.location.reload(false);
    }

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
                <div className="output-survey q6">
                    I rated my love of learning as: {formData.formData.learning}
                    {
                        (formData.formData.learning > 50)
                            ? <p>I love to learn!</p>
                            : <p>I'd rather do other things</p>
                    }
                </div>
            </section >
            <section>
                <button onClick={refreshPage}>Start again</button>
            </section>
        </>
    )
}
