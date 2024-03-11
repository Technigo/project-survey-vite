export const App = () => {
  const onSubmit = (event) => {
    // here we create the varible for the funtion that prevent the page from refreshing when hit submit button. 
    event.preventDefault();
  };

  return (
    <div>
      <header>
        <h1>What's the best you?</h1>
      </header>
{/* here we register the function (event handler) */}
      <form onSubmit={onSubmit}>
        <div>
          {/* "for" and "id" has to match, it's for accessabiliy  */}
          <label for="bestThing">What's the best thing about you?</label>
          <input type="text" id="bestThing" name="bestThing" />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
