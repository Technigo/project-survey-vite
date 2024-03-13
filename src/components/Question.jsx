import { useState } from "react";

const Question = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="question-options">
      <div>
        <label htmlFor="username">Enter your name: </label>
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          name="username"
          value={name}
        />
      </div>
      <div>
        <label htmlFor="useremail">Enter your email: </label>
        <input
          onChange={e => setEmail(e.target.value)}
          type="email"
          name="useremail"
          placeholder="hello123@gmail.com"
          value={email}
        />
      </div>
    </div>
  );
};

export default Question;
