import { useState } from 'react';
import House from './Components/House';
import Container from './Components/Container';


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
            <img src="./Publi"></img>
            <input />
            <input />
          </House>

        </>

      )}

    </Container>

  );
};



