import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { useState } from "react"

export const App = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [celebrate, setCelebrate] = useState('')
  const [best, setBest] = useState('')
  const [holiday, setHoliday] = useState('')
  const [showSummary, setShowSummary] = useState(false)
 
  return (
    <main className="container">
      <Header />
      {showSummary ? 
      <Summary 
      name={name} 
      setName={setName} 
      age={age} 
      setAge={setAge} 
      celebrate={celebrate} 
      setCelebrate={setCelebrate} 
      best={best} setBest={setBest} 
      holiday={holiday} 
      setHoliday={setHoliday} 
      setShowSummary={setShowSummary} /> : 
      <Form 
      name={name} 
      setName={setName} 
      age={age} 
      setAge={setAge} 
      celebrate={celebrate} 
      setCelebrate={setCelebrate} 
      best={best} setBest={setBest} 
      holiday={holiday} 
      setHoliday={setHoliday} 
      setShowSummary={setShowSummary} />}
    </main>
  )
};
