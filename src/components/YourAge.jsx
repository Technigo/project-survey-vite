import { useState } from 'react';

const YourAge = ({ onNext, setYourAgeProp }) => {
    const [yourAge, setYourAge] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleYourAge = (event) => {
        setYourAge(event.target.value);

        const regex = /^0$|^[1-9][0-9]*$/;  // all digit including 0
        setIsValid(regex.test(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isValid) {
            return; 
        }
        console.log(yourAge);
        setYourAgeProp(yourAge);
        onNext();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={yourAge}
                onChange={handleYourAge}
                style={{ width: '210px' }}
                required
            />
            {!isValid && <p style={{color: 'blue'}}>Please enter a valid age (only number).</p>}

            <button type="submit" className="next-button">Next</button>
        </form>
    );
}

export default YourAge;
