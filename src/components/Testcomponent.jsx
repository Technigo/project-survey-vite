import { useState } from "react"

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
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="Stockholm">Stockholm</option>
                        <option value="Oslo">Oslo</option>
                        <option value="London">London</option>
                        <option value="Venice">Venice</option>
                        <option value="Paris">Paris</option>
                    </select>
                    <label>Which one of our hotels did you stay at?</label>
                    <input
                        type="text" 
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    /> 
                    <label>Describe your experience in a few sentences</label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <label>Would you recommend a friend to stay at the hotel in the future?</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="yes"
                                checked={recommendation === "yes"}
                                onChange={(e) => setRecommendation(e.target.value)}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="no"
                                checked={recommendation === "no"}
                                onChange={(e) => setRecommendation(e.target.value)}
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
