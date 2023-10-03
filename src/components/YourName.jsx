import { useState } from 'react';

const YourName = ({ onNext, setYourNameProp }) => {
    const [yourName, setYourName] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleYourName = (event) => {
        setYourName(event.target.value);

        const regex = /^[a-zA-Z]{2,20}$/;
        setIsValid(regex.test(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isValid) {
            return; 
        }
        console.log(yourName);
        setYourNameProp(yourName);
        onNext();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={yourName}
                onChange={handleYourName}
                style={{ width: '210px' }}
                required
            />
            {!isValid && <p style={{color: 'blue'}}>Your name should be 2-20 alphabets long.</p>}

            <button type="submit" className="next-button">Next</button>
        </form>
    );
}

export default YourName;
