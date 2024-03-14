import { useState } from "react"
import headerImage from './pexels-quark-studio-2507010.jpg';

export const Test = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Stockholm')
    const [recommendation, setRecommendation] = useState('')
    const [submittedData, setSubmittedData] = useState(null)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit =(e) => {
        e.preventDefault()
        const blog = { title, body, author, recommendation }
        console.log(blog)
        setSubmittedData(blog)
       
        setTitle('')
        setBody('')
        setAuthor('Stockholm')
        setRecommendation('')
        setFormSubmitted(true)
    }

    return(
        <div className="test">
           
            <div className= "header">
                <img src={headerImage} alt="Picture of a hotel"/>
            </div>
            {formSubmitted ? (
                <div> 
                    <h2>Submitted hotel stay survey</h2>
                    <p>Hotel: {submittedData.title}</p>
                    <p>Comment: {submittedData.body}</p>
                    <p>City: {submittedData.author}</p>
                    <p>Recommendation: {submittedData.recommendation}</p>
                    <p>Thank you for your input, your data means alot to us, have a nice day</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Quick Survey on your hotel stay</h2>
                    <label>Where did you stay?</label>
                    <select
                    id= "Where did you stay?"
                    aria-label="Where did you stay?"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="Stockholm">Stockholm</option>
                        <option value="Oslo">Oslo</option>
                        <option value="London">London</option>
                        <option value="Venice">Venice</option>
                        <option value="Paris">Paris</option>
                    </select>
                    <label htmlFor = "Which one of our hotels did you stay at?" >Which one of our hotels did you stay at?</label>
                    <input 
                        type="text" 
                        id="Which one of our hotels did you stay at?"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        aria-label= "Type answer"
                    /> 
                    <label htmlFor = "Describe your experience in a few sentences" >Describe your experience in a few sentences</label>
                    <textarea 
                    id="Describe your experience in a few sentences"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        aria-label= "Type answer"
                    ></textarea>
                    <label htmlFor = "Would you recommend a friend to stay at the hotel in the future?">Would you recommend a friend to stay at the hotel in the future?</label>
                    <div>
                        <label htmlFor = "radiobuttons">
                            <input
                                type="radio" 
                                id="radiobuttons"
                                value="yes"
                                checked={recommendation === "yes"}
                                onChange={(e) => setRecommendation(e.target.value)}
                                aria-label= "Pick yes"
                            />
                            Yes
                        </label >
                        <label htmlFor = "radiobuttons">
                            <input
                                type="radio" 
                                id="radiobuttons"
                                value="no"
                                checked={recommendation === "no"}
                                onChange={(e) => setRecommendation(e.target.value)}
                                aria-label= "Pick no"
                            />
                            No
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    )
}

export default Test
