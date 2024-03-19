import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { useState } from "react"

export const App = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [showSummary, setShowSummary] = useState(false)
 
  return (
    <main>
      <Header />

      {showSummary ? <Summary name={name} setName={setName} age={age} setAge={setAge} setShowSummary={setShowSummary} /> : <Form name={name} setName={setName} age={age} setAge={setAge} setShowSummary={setShowSummary} />}

    </main>
  )
};
