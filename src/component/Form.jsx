import { useState } from 'react'

import { ContinentQuestion } from './ContinentQuestion'
import { NameQuestion } from './NameQuestion'
import { PreferenceQuestion } from './PreferenceQuestion'

export const Form = () => {

    const [name, setName] = useState('')
    const [preference, setPreference] = useState ('');
    const [continent, setContinent] = useState ('');


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name)
        console.log(preference)
        console.log(continent)
        
        alert(`Name: ${name}
            Preference: ${preference}
            Continent: ${continent}`)
    }
    
    return (
        <div className="theFormContainer">
            <form id="theForm" onSubmit={event => handleSubmit(event)}>

                <NameQuestion value={name} setValue={setName} />

                <PreferenceQuestion value={preference} setValue={setPreference} />

                <ContinentQuestion value={continent} setValue={setContinent} />
                

                <button type="submit">WHAT DESTINATION SUITS YOU?</button>

            </form>
        </div>

    )
}