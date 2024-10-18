
import { useState } from "react";
import { Header } from "./components/Header.jsx"
import { MultiStepForm } from "./components/Multistepform.jsx";
import { Welcome } from "./components/welcome/Welcome.jsx";



export const App = () => {
    const [showForm, setShowForm] = useState(false)

    const startForm = () => {
        setShowForm(true)
    }
    return (
        <div className="app-container">
            <Header />
            {!showForm ? (
                <>
                    <Welcome />
                    <button className="button" onClick={startForm}>
                        Start
                    </button>
                </>
            ) : (
                <MultiStepForm />
            )}
        </div>
    )
}