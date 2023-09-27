import React from 'react';

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { SurveyForm } from "./components/SurveyForm"

export const App = () => {

  return (
    <>
      <Header />
      <section className="form-wrapper">
        <SurveyForm />
      </section>
      <Footer />
    </>
  )
};
