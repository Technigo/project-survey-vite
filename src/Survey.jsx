import { Summary } from "./Summary"
import { useState } from 'react'

export const Survey = () => {

    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')

    const handleNext = (e) => {
        e.preventDefault()
console.log(user, email)
    }
  return (
    <>
    <form onSubmit={handleNext}>
        <input type="text" placeholder="enter your name" onChange={(e) => {setUser(e.target.value)}} value ={user} required />

        <input type="email" placeholder="enter your email" onChange={(e) => {setEmail(e.target.value)}} value={email} required />
        <button type="next">Next</button>

    </form>
    {/* add questions */ }
    <Summary />

    </>
  )
}
