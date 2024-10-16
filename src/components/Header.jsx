export const Header = ({ isSubmitted }) => {
  return ( 
    <div className="header-container">
      {isSubmitted ? (
        <>
          <h1>Results</h1>
          <h2>The Science of Happiness</h2>
        </>
      ) : (
        <>
          <h1>The Science of Happiness</h1>
          <h2>Everyday Joy Boosters survey</h2>
        </>
      )}
    </div>
  );
};