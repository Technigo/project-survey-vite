import { useState } from "react";


export const Icecream = ({ updateFormData, value }) => {


    //NOTE: After Q&A I know that I should have this useState hook in the parent - surveyForm - Lifting state up
    const [width, setWidth] = useState(100);

    //this function is called when the first range slider changes
    const changeWidth = (event) => {
        setWidth(event.target.value);
    };

    const likeIcecream = (event) => {
        updateFormData("icecream", event.target.value);
        changeWidth();
    }

    return (
        <div>
            <p>How much do you enjoy learning new things?  </p>
            <div className="slider-container">
                <ul className="sliderLabels">
                    <li id="li0">&#128577; never</li>
                    <li id="li1"></li>
                    <li id="li2">Sometimes</li>
                    <li id="li3"></li>
                    <li id="li4">so much! &#128512;</li>
                </ul>
                <input
                    type="range"
                    onChange={likeIcecream}
                    min={1}
                    max={100}
                    defaultValue={width}
                    className="icecream-slider"
                />
            </div>
        </div>
    )
}
