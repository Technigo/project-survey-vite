import React from 'react';
import FormWizard from './components/FormWizard';
import './index.css';

function App() {
  return (
    <>
      <section className="bg-cinema bg-cover bg-center w-screen h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
          <div className="w-full rounded-lg shadow-xl sm:mt-0 sm:max-w-md xl:p-0 bg-gray-950">
            <h1 className='text-5xl font-bold font-serif italic m-5 text-center text-red-600 sm:m-10'>CinemApp</h1> 
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <FormWizard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
