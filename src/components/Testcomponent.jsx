import { useState } from "react"

export const Test = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Stockholm') // Default value
    const [recommendation, setRecommendation] = useState('')
    const [submittedData, setSubmittedData] = useState(null)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit =(e) => {
        e.preventDefault()
        const blog = { title, body, author, recommendation }
        console.log(blog)
        setSubmittedData(blog)
        // Clearing the form fields
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
                    <h2>Submitted Data</h2>
                    <p>Title: {submittedData.title}</p>
                    <p>Body: {submittedData.body}</p>
                    <p>Author: {submittedData.author}</p>
                    <p>Recommendation: {submittedData.recommendation}</p>
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
