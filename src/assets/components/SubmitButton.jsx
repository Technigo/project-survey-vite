/* eslint-disable react/prop-types */
export function SubmitButton({ onClick }) {

  return (
    <button type="submit" className="submitButton" onClick={onClick}>
      Submit
    </button>
  );
}
