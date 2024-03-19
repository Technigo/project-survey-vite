import { useState } from "react";
import headerImage from './pexels-quark-studio-2507010.jpg';

export const Test = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Stockholm');
    const [recommendation, setRecommendation] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [rating, setRating] = useState(50); // Default rating set to 50

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, recommendation, rating };
        console.log(blog);
        setSubmittedData(blog);
       
        setTitle('');
        setBody('');
        setAuthor('Stockholm');
        setRecommendation('');
        setRating(50); // Reset rating to default value
        setFormSubmitted(true);
    };

    return (
        <div className="test">
            <div className="header">
                <img src={headerImage} alt="Picture of a hotel"/>
            </div>
            {formSubmitted ? (
                <div> 
                    <h2>Submitted hotel stay survey</h2>
                    <p>You stayed at {submittedData.title} hotel</p>
                    <p>This is your comment: {submittedData.body}</p>
                    <p>You stayed in {submittedData.author} city</p>
                    <p>You said {submittedData.recommendation} to enjoying your stay</p>
                    <p> You rated us a {submittedData.rating} / 100 </p>
                    <p>Thank you for your input, your data means a lot to us, have a nice day</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Quick Survey on your hotel stay</h2>
                    <label htmlFor="where">Where did you stay?</label>
                    <select
                        id="where"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="Stockholm">Stockholm</option>
                        <option value="Oslo">Oslo</option>
                        <option value="London">London</option>
                        <option value="Venice">Venice</option>
                        <option value="Paris">Paris</option>
                    </select>
                    <label htmlFor="hotel">Which one of our hotels did you stay at?</label>
                    <input 
                        type="text" 
                        id="hotel"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    /> 
                    <label htmlFor="experience">Describe your experience in a few sentences</label>
                    <textarea 
                        id="experience"
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                    <label htmlFor="recommendation">Did you enjoy your stay?</label>
                    <div id="recommendation">
                        <label>
                            <input
                                type="radio" 
                                value="yes"
                                checked={recommendation === "yes"}
                                onChange={(e) => setRecommendation(e.target.value)}
                            />
                            Yes
                        </label >
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
                    <label htmlFor="rating"> How likely are you to recommend us to friends and family? (1-100)</label>
                    <input 
                        type="range"
                        id="rating"
                        min="1"
                        max="100"
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                    />
                    <output htmlFor="rating">{rating}</output>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Test;
