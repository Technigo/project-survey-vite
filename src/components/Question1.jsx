export const Question1
 = () => {

  const [activity, setActivity] = useState('')

  return (
    <div>
      <input type="text" placeholder="Write your answer here..." value ={activity} required />