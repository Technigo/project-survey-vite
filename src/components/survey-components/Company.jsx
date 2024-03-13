import { useState } from 'react'

export const Company = () => {
const [ company, setCompany ] = useState('')

const selectCompany = (event) => {
    setCompany(event.target.value)
}

return(
<div className="question company">
<h3>4. Who do you dream of eating pizza with?</h3>
<select value={company} onChange={selectCompany}>
      <option value="" selected="selected" disabled hidden>
        Company of your choice
        </option>
        <option value="Michelle Obama">Michelle Obama</option>
        <option value="Albert Einstein">Albert Einstein</option>
        <option value="Greta Thunberg">Greta Thunberg</option>
        <option value="Jackie Chan">Jackie Chan</option>
        <option value="Margaret Thatcher">Margaret Thatcher</option>
        <option value="Martin Luther King Jr">Martin Luther King Jr</option>
        <option value="Frida Kahlo">Frida Kahlo</option>
        <option value="Vladimir Putin">Vladimir Putin</option>
        <option value="Yayoi Kusama">Yayoi Kusama</option>
      </select>
      <p><span>We will organize a pizza date for you and {company}</span></p>
      </div>
)
}
