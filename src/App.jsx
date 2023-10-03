import React, { useState } from 'react';
import House from './Components/House';
import Container from './Components/Container';
import Logo from './assets/barbielogo.svg';

export const App = () => {

  const [step, setStep] = useState('form'); // Keeps track of the current step
  const [formData, setFormData] = useState({
    ticketCount: 1,
    radioOption: '',
    checkboxes: [],
    email: '',
    name: '',
  }); // Stores the form data


  // Function to switch the submit step
  const goToSubmit = () => setStep('submit');

  //This function update the count of tickets in the form data
  const handleTicketCountChange = (e) => {
    console.log('Selected ticket count:', e.target.value);
    setFormData({ ...formData, ticketCount: e.target.value });
  };

  // radio button function
  const handleRadioChange = (e) => {
    console.log('Selected radio option:', e.target.value);
    setFormData({ ...formData, radioOption: e.target.value });
  };

  //This update the checkboxes
  const handleCheckboxChange = (e) => {
    console.log('checkboxChange:', e.target.value);
    const checkboxValue = e.target.value;
    if (formData.checkboxes.includes(checkboxValue)) {
      //This remove the ckeckbox if its already selected

      setFormData({
        ...formData,
        checkboxes: formData.checkboxes.filter((checkbox) => checkbox !== checkboxValue),
      });
    } else {

      // Add the ckeckbox value is not selected
      setFormData({
        ...formData,
        checkboxes: [...formData.checkboxes, checkboxValue],
      });
    }
  };

  // Here you update the name
  const handleInput1Change = (e) => {
    console.log('handleInput1Change:', e.target.value);
    setFormData({ ...formData, name: e.target.value });
  };

  //here you update the mail
  const handleInput2Change = (e) => {
    console.log('handleInput2Change:', e.target.value);
    setFormData({ ...formData, email: e.target.value });
  };

  const handleSubmit = () => {
    // Switch to the submit step when the submit button is clicked
    goToSubmit();
  };

  return (
    <Container>
      {step === 'form' && (
        <>
          <House>
            <img src={Logo} alt="Logo" />
            <h1>Come on Barbie let's go party!</h1>
            <p>Let's get tickets for the Barbie movie?</p>
          </House>

          <House>
            <h1>Please let me know your name:</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label style={{ marginRight: '10px', padding: '5px' }}>
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.input1}
                  onChange={handleInput1Change}
                />
              </label>
            </div>
          </House>

          <House>
            {/* here I wanted to try to inject the CSS in the code */}
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ marginRight: '10px' }}>How many tickets do you like to book?</p>


              <select value={formData.ticketCount} onChange={handleTicketCountChange}>
                {Array.from({ length: 10 }, (_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </House>

          <House>
            <h1>Who do you want to sit with?</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label style={{ marginRight: '10px', padding: '10px' }}>
                <p>Barbie</p>
              </label>
              {/* When I changed the value my radioBtns are not highlighted when you click them */}
              <input
                type="radio"
                name="radioOption"
                value="Barbie 👑"
                checked={formData.radioOption === 'Barbie 👑'}
                onChange={handleRadioChange}
              />
            </div>



            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label style={{ marginRight: '10px', padding: '10px' }}>
                <p>Ken</p>
              </label>
              <input
                type="radio"
                name="radioOption"
                value="Ken 🎩"
                checked={formData.radioOption === 'Ken 🎩'}
                onChange={handleRadioChange}
              />

            </div>


            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label style={{ marginRight: '10px', padding: '10px' }}>
                <p>The President</p>

              </label>
              <input
                type="radio"
                name="radioOption"
                value="The President 💍"
                checked={formData.radioOption === 'The President 💍'}
                onChange={handleRadioChange}
              />

            </div>
          </House>

          <House>
            <h1>Please choose your favorite snack!</h1>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label style={{ marginRight: '10px', padding: '10px' }}>
                <p>Champagne</p>
              </label>
              <input
                type="checkbox"
                name="checkbox1"
                value="Champagne 🥂"
                checked={formData.checkboxes.includes('Champagne 🥂')}
                onChange={handleCheckboxChange}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label style={{ marginRight: '10px', padding: '10px' }}>
                <p>Pizza</p>
              </label>
              <input
                type="checkbox"
                name="checkbox2"
                value="Pizza 🍕"
                checked={formData.checkboxes.includes('Pizza 🍕')}
                onChange={handleCheckboxChange}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label style={{ marginRight: '10px', padding: '10px' }}>
                <p>Cotton Candy</p>
              </label>
              <input
                type="checkbox"
                name="checkbox3"
                value="Cotton Candy 🍭"
                checked={formData.checkboxes.includes('Cotton Candy 🍭')}
                onChange={handleCheckboxChange}
              />
            </div>
          </House>

          <House>
            <h1>May I ask for your email:</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label style={{ marginRight: '10px', padding: '5px' }}>
                <input
                  type="text"
                  placeholder="email"
                  value={formData.input2}
                  onChange={handleInput2Change}
                />
              </label>
            </div>

          </House>

          <button onClick={handleSubmit}>Submit</button>
        </>
      )
      }
      {
        step === 'submit' && (


          <Container>
            <House>
              <h1 > Hi {formData.name}!</h1>
              <p>Thanks for booking the tickets!</p>
            </House>

            <House>
              <p>You have booked {formData.ticketCount} tickets. {formData.radioOption} will sit with you!</p>
            </House>

            <House>
              <p>We will have your favorite treat, {formData.checkboxes.join(', ')} ready for you! The tickets will be delivered to {formData.email}.</p>
            </House>

          </Container>

        )
      }
    </Container >
  );
};

// style={{ fontSize: '25px' }}
// style={{ fontSize: '75px' }}
// style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}




