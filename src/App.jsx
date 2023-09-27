import { useState } from 'react';
import House from './Components/House';
import Container from './Components/Container';
import Logo from './assets/barbielogo.svg';


export const App = () => {

  const [step, setStep] = useState('form');

  const goToSubmit = () => setStep('submit');

  return (
    <Container>
      {step === 'form' && (
        <>
          <House>
            <h1>Come on Barbie let's go party!</h1>
            <p>Do you want to book tickets to the Barbie movie?</p>
            <img src={Logo} alt="Logo" />;
            <input />
            <input />
          </House>

          <House>
            <input name='test' type='radio' />
            <input name='test' type='radio' />
            <input name='test' type='radio' />
          </House>

          <House>
            <p></p>
            <select>
              <option>1</option>
              <option>2</option>
            </select>
          </House>

          <House>
            <p></p>
            <input type='checkbox' />
            <input type='checkbox' />
            <input type='checkbox' />
          </House>

          <button onClick={goToSubmit}>Submit</button>
        </>

      )}
      {step === 'submit' && (

        <p>Summary</p>

      )}

    </Container>

  );
};



