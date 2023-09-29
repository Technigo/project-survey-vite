export const AgeQuestion = ({ value, setValue, setIsAgeValid }) => {
  const ageInput = (e) => {
    const ageValue = e.target.value;
    setValue("age", ageValue);

    if (parseInt(ageValue, 10) < 18) {
      setIsAgeValid(false);
    } else {
      setIsAgeValid(true);
    }
  };

  return (
    <label className="question-name-age">
      What's your age?
      <input
        placeholder="Age here..."
        type="number"
        onChange={ageInput}
        value={value}
      />
    </label>
  );
};

// import { useState } from "react";

// export const AgeQuestion = ({ value, setValue }) => {
//   const [age, setAge] = [value, setValue];
//   const [invalidAge, setInvalidAge] = useState(false);

//   const ageInput = (e) => {
//     const enteredAge = e.target.value;
//     setAge(enteredAge);

//     // Check if age is valid
//     if (parseInt(enteredAge, 10) < 18) {
//       setInvalidAge(true);
//     } else {
//       setInvalidAge(false);
//       setValue("age", enteredAge);
//     }
//   };

//   return (
//     <div>
//       {invalidAge ? (
//         <div>
//           <p>You must be older than 18 to take this survey.</p>
//           {/* You can add a button or link to restart the survey here if you want */}
//         </div>
//       ) : (
//         <label className="question-name-age">
//           What&apos;s your age?
//           <input
//             placeholder="Age here..."
//             type="number"
//             onChange={ageInput}
//             value={age}
//           />
//         </label>
//       )}
//     </div>
//   );
// };
