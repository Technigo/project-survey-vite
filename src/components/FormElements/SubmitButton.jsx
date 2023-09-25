// Component for button, to allow it to be reused multiple times in the application
export const SubmitButton = () => {
    return (
        <div>
            {/* When the the button is next to an inputfield or select dropdown, it should have the class submit-btn-inline, otherwise it should have the class submit-btn-standalone: REMEMBER TO CHANGE THIS IN CODE DYNAMICALLY LATER */}
            <button className="submit-btn inline" type="submit"></button>
        </div>
    )
}
