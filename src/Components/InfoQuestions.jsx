

import { useState } from "react";

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
        <input type="text" id="name" name="name" placeholder="Your name" value={name} onChange={handleInputNameChange}/>
      </label>
      <label htmlFor="email"> Email :
        <input type="email" id="email" name="email" placeholder="email@example.com" value={email} onChange={handleInputEmailChange}/>
      </label>
    </div>
  )
}
