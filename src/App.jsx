// src/App
import React, { useState } from 'react';

import { Header } from "./components/Header";
import { Survey } from "./components/Survey";


export const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div>
      <Header isSubmitted={isSubmitted} />
      <Survey setIsSubmitted={setIsSubmitted} />
    </div>
  );
};