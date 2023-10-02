import React, { useState } from 'react';
import House from './Components/House';
import Container from './Components/Container';
import Logo from './assets/barbielogo.svg';

export const App = () => {

  const [step, setStep] = useState('form');
  const [formData, setFormData] = useState({
    ticketCount: 1,
    radioOption: '',
    checkboxes: [],
    email: '',
    name: '',
  });

  const goToSubmit = () => setStep('submit');

  const handleTicketCountChange = (e) => {
    console.log('Selected ticket count:', e.target.value);
    setFormData({ ...formData, ticketCount: e.target.value });
  };

  const handleRadioChange = (e) => {
    console.log('Selected radio option:', e.target.value);
    setFormData({ ...formData, radioOption: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    console.log('checkboxChange:', e.target.value);
    const checkboxValue = e.target.value;
    if (formData.checkboxes.includes(checkboxValue)) {

      setFormData({
        ...formData,
        checkboxes: formData.checkboxes.filter((checkbox) => checkbox !== checkboxValue),
      });
    } else {

      setFormData({
        ...formData,
        checkboxes: [...formData.checkboxes, checkboxValue],
      });
    }
  };

  const handleInput1Change = (e) => {
    console.log('handleInput1Change:', e.target.value);
    setFormData({ ...formData, name: e.target.value });
  };

  const handleInput2Change = (e) => {
    console.log('handleInput2Change:', e.target.value);
    setFormData({ ...formData, email: e.target.value });
  };

  const handleSubmit = () => {

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

              {/* This code makes sure to collect the data in the form */}
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

              <input
                type="radio"
                name="radioOption"
                value="Barbie"
                checked={formData.radioOption === 'Option 1'}
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
                value="Ken"
                checked={formData.radioOption === 'Option 2'}
                onChange={handleRadioChange}
              />

            </div>

            {/* When I changed the value my radioBtns are not highlighted when you click them */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <label style={{ marginRight: '10px', padding: '10px' }}>
                <p>The President</p>

              </label>
              <input
                type="radio"
                name="radioOption"
                value="The President"
                checked={formData.radioOption === 'Option 3'}
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
                value="Champagne"
                checked={formData.checkboxes.includes('Checkbox 1')}
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
                value="Pizza"
                checked={formData.checkboxes.includes('Checkbox 2')}
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
                value="Cotton Candy"
                checked={formData.checkboxes.includes('Checkbox 3')}
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container>
              <House>
                <h1 style={{ fontSize: '75px' }}> Hi {formData.name}!</h1>
                <p style={{ fontSize: '25px' }}>Thanks for booking the tickets! You have booked {formData.ticketCount} tickets. {formData.radioOption} will sit with you! We will have your favorite treat, {formData.checkboxes.join(', ')} ready for you! The tickets will be delivered to {formData.email}.</p>
              </House>
            </Container>
          </div>

        )
      }
    </Container >
  );
};






