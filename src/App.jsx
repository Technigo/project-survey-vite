import { useState } from 'react';
import House from './Components/House';





export const App = () => {

  const [step, setStep] = useState('form');

  const goToSubmit = () => setStep('summary');

  return



  <div>Come on Barbie, lets go party!</div>;
};
