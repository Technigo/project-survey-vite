export const Summary = (props) => {
  return (
    <div className="summary">
      <h2>Summary:</h2>
      <h3>The best thing about you is:</h3>
      <p>{props.bestThing}</p>
      <h3>And do you often say nice things to people?</h3>
      <p>{props.niceThings}</p>
      <h3>And what definies you as a person is:</h3>
      <p>{props.definesYou}</p>
    </div>
  );
};
