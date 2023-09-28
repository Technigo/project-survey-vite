import { useState } from 'react';
import Question from './Question';
import Summary from './Summary';

function Form() {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            text: 'Who is your all-time favorite "Friends" character?',
            type: 'radio',
            answer: '',
            options: [
                'Rachel Green',
                'Ross Geller',
                'Monica Geller',
                'Chandler Bing',
                'Joey Tribbiani',
                'Phoebe Buffay',
            ],
        },
        {
            id: 2,
            text: 'Select all the characters whose fashion sense you admire:',
            type: 'checkbox',
            answer: [],
            options: [
                'Rachel Green',
                'Ross Geller',
                'Monica Geller',
                'Chandler Bing',
                'Joey Tribbiani',
                'Phoebe Buffay',
            ],
        },
        {
            id: 3,
            text: 'Which of the following coffee shop drinks would you most likely order at Central Perk?',
            type: 'dropdown',
            answer: '',
            options: [
                'Cappuccino',
                'Espresso',
                'Latte',
                'Mocha',
                'Iced Coffee',
                'Herbal Tea',
            ],
        },
        {
            id: 4,
            text: 'Share your favorite memorable moment or quote from "Friends" and why it\'s special to you:',
            type: 'text',
            answer: '',
        },
    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleAnswerSubmit = (answer) => {
        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestionIndex].answer = answer;
        setQuestions(updatedQuestions);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setCurrentQuestionIndex(null);
        }
    };

    return (
        <div className="Form">
            {currentQuestionIndex !== null ? (
                <Question
                    question={questions[currentQuestionIndex]}
                    onAnswerSubmit={handleAnswerSubmit}
                />
            ) : (
                <Summary questions={questions} />
            )}
        </div>
    );
}

export default Form;
