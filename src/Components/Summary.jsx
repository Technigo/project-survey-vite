import PropTypes from 'prop-types';

const Summary = ({ formData }) => {
    return (
        <div className="summary">
            <h2>Summary</h2>
            {Object.entries(formData).map(([question, answer]) => (
                <p key={question}>
                    You chose <strong>{answer}</strong> for the question: <em>{question}</em>.
                </p>
            ))}
        </div>
    );
};

Summary.propTypes = {
    formData: PropTypes.object.isRequired
};

export default Summary;