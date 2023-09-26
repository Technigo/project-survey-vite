/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

export const InfoQuestions = () => {
 const [name , setName] = useState("");
 const [email , setEmai] = useState("");

 const handleInputNameChange = (e)=>{
    setName(e.target.value)

 }
 const handleInputEmailChange = (e)=>{
    setEmai(e.target.value)

 }
      

  return (
    <div className='info-questions'>
        <label htmlFor="name"> Name :
                <input type="text" id="name" name="name" placeholder="your name" value={name} onChange={handleInputNameChange}/>
            </label>
            <label htmlFor="email"> Email :
                <input type="email" id="email" name="email" placeholder="your Email" value={email} onChange={handleInputEmailChange}/>
            </label>
    </div>
  )
}
