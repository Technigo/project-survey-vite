import React, { useState } from 'react';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    activity: '',
    musicHappy: '',
    happySong: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="container">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="question">
            <label htmlFor="numberOne"><h3>1.</h3></label>
              <label htmlFor="activity"><h3>What is your favorite mood-boosting activity?</h3></label>
              <input
                type="text" 
                placeholder='Write your answer here...'
                id="activity"
                name="activity"
                value={formData.activity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="question">
              <label htmlFor="numberTwo"><h3>2.</h3></label>
              <label htmlFor="musicHappy"><h3>Does music make you happy?</h3></label>
              <div className="musicHappyOptions">
                <button
                  type="option"
                  onClick={(event) => {
                    event.preventDefault();
                    setFormData({ ...formData, musicHappy: 'Yes, absolutely' });
                  }}
                  className={formData.musicHappy === 'Yes, absolutely' ? 'selected' : ''}
                >
                  Yes, absolutely
                </button>
                <button
                  type="option"
                  onClick={(event) => {
                    event.preventDefault();
                    setFormData({ ...formData, musicHappy: 'No, I like the silence' });
                  }}
                  className={formData.musicHappy === 'No, I like the silence' ? 'selected' : ''}
                >
                  No, I like the silence
                </button>
              </div>
            </div>

            <div className="question">
              <label htmlFor="numberThree"><h3>3.</h3></label>
              <label htmlFor="happySong"><h3>What is your go-to happy song?</h3></label>
              <select id="happySong" name="happySong" value={formData.happySong} onChange={handleChange} required>
                <option value="">Select</option>
                <option value="Don't Stop Believin' - Journey">Don't Stop Believin' - Journey</option>
                <option value="I Gotta Feeling - The Black Eyed Peas">I Gotta Feeling - The Black Eyed Peas</option>
                <option value="Walking on Sunshine - Katrina and the Waves">Walking on Sunshine - Katrina and the Waves</option>
                <option value="Can't Stop the Feeling! - Justin Timberlake">Can't Stop the Feeling! - Justin Timberlake</option>
                <option value="Good Vibrations - The Beach Boys">Good Vibrations - The Beach Boys</option>
                <option value="Best Day of My Life - American Authors">Best Day of My Life - American Authors</option>
                <option value="Uptown Funk - Mark Ronson ft. Bruno Mars">Uptown Funk - Mark Ronson ft. Bruno Mars</option>
                <option value="I Want to Hold Your Hand - The Beatles">I Want to Hold Your Hand - The Beatles</option>
                <option value="Lovely Day - Bill Withers">Lovely Day - Bill Withers</option>
                <option value="Shake It Off - Taylor Swift">Shake It Off - Taylor Swift</option>
                <option value="I'm Yours - Jason Mraz">I'm Yours - Jason Mraz</option>
                <option value="Here Comes the Sun - The Beatles">Here Comes the Sun - The Beatles</option>
                <option value="Walking on Sunshine - Aly & AJ">Walking on Sunshine - Aly & AJ</option>
                <option value="Don't Worry, Be Happy - Bobby McFerrin">Don't Worry, Be Happy - Bobby McFerrin</option>
                <option value="September - Earth, Wind & Fire">September - Earth, Wind & Fire</option>
                <option value="Good Life - OneRepublic">Good Life - OneRepublic</option>
                <option value="Happy Together - The Turtles">Happy Together - The Turtles</option>
                <option value="I'm a Believer - The Monkees">I'm a Believer - The Monkees</option>
                <option value="Shut Up and Dance - Walk the Moon">Shut Up and Dance - Walk the Moon</option>
              </select>
            </div>

            <button type="submit">Submit your answer</button>
          </form>
        ) : (
          <div className='summary'>
            <h2>Thank you for participating!</h2>
            <p><strong>Favorite Mood-Boosting Activity:</strong> {formData.activity}</p>
            <p><strong>Does Music Make You Happy?:</strong> {formData.musicHappy}</p>
            <p><strong>Go-To Happy Song:</strong> {formData.happySong}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default SurveyForm;