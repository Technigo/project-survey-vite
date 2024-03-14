import { useState } from 'react'

export const Submit = () => {
const [submit, setSubmit] = useState(false);



return(
    <div className="question submit">
        <input type="submit" value="Send" onChange= accessKey="s" />
        </div>
)
}