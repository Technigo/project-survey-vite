// eslint-disable-next-line react/prop-types
export function SubmitButton({ onClick }) {
  return (
    <button type="submit" className="submit-button" onClick={onClick}>
      Submit
    </button>
  );
}
