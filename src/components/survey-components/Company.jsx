import { useState } from 'react'

export const Company = () => {
const [ company, setCompany ] = useState('')

const selectCompany = (event) => {
    setCompany(event.target.value)
}

return(
<div className="question company">
<h3>4. Who do you dream of eating pizza with?</h3>
      <form>
        <input 
        type="text"
        value={company}
        onChange={selectCompany}></input>
      </form>
      <p><span>We will organize a pizza date for you and {company}</span></p>
      </div>
)
}
