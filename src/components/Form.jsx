import { useState } from 'react';
import Question from './Question';
import Summary from './Summary';

function Form() {
    const [questions, setQuestions] = useState([
        {
            id: 1,
            text: 'Hi there Friends-fan! Let\'s play a little Friends-game. Start by writing your name:',
            type: 'text',
            answer: '',
        },

        {
            id: 2,
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
            id: 3,
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
            id: 4,
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
            id: 5,
            text: 'Share your favorite memorable moment or quote from "Friends":',
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
