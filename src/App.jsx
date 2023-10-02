// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NamePet from './components/NamePet';
import ColorPet from './components/ColorPet';
import YourName from './components/YourName'; // your name
import YourAge from './components/YourAge'; // your age
import PetsRadioButton from './components/PetsRadioButton' // 5 pets option radio button
import Header from './components/Header'


export const App = () => {
  const totalSteps = 6;
  const [step, setStep] = useState(1);
  const [namePet, setNamePet] = useState('');
  const [color, setColor] = useState('');
  const [yourName, setYourName] = useState(''); // your name 
  const [yourAge, setYourAge] = useState(''); // your age
  const [selectedPet, setSelectedPet] = useState(''); // fav pet

  const proceedToNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  const resetForm = () => {
    setStep(1);
    setNamePet('');
    setColor('');
    setYourName('');
    setYourAge('');
    setSelectedPet('');
  };

  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div>
      <Header />
      <div style={{ background: 'lightgray', height: '20px', marginBottom: '10px' }}>
        <div style={{ width: `${progressPercentage}%`, height: '100%', background: 'blue' }}></div>
      </div>
      {step === 1 && (
        <>
          <h4>What is your name?</h4>
          <YourName onNext={proceedToNextStep} setYourNameProp={setYourName} />
        </>
      )}

      {step === 2 && (
        <>
          <h4>What is your age?</h4>
          <YourAge onNext={proceedToNextStep} setYourAgeProp={setYourAge} />
        </>
      )}

      {step === 3 && (
        <div className="App">
          <h1>Choose your favorite animal as pet:</h1>
          <PetsRadioButton setSelectedPet={setSelectedPet} selectedPet={selectedPet} onNext={proceedToNextStep} />
        </div>
      )}


      {step === 4 && (
        <>
          <h3>what will be the name of this pet?</h3>
          <NamePet onNext={proceedToNextStep} setNamePetProp={setNamePet} />
        </>
      )}

      {step === 5 && (
        <>
          <ColorPet onNext={proceedToNextStep} setColorPetProp={setColor} />
        </>
      )}

      {step === 6 && (
        <div style={{
          backgroundColor: color,
          // color: getTextColor(color),
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '200px'


        }}>
          <h3>You, your new pet and new adventures:</h3>

          <p>In a cozy town, adventurous {yourAge} - year old {yourName} met {namePet}, a rare {color} {selectedPet}. Their instant connection led to countless adventures and captivating the town. Under the old oak tree, they pledged to explore the world together, proving extraordinary friendships transcend colors. Off they went, leaving the comfort of home for a colorful journey.</p>

          <button onClick={resetForm}>Restart</button>

        </div>
      )}


    </div>
  );
}

export default App;

//hejhej test 