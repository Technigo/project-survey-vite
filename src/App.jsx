export const App = () => {
  return (
    <div>
    <header>
      <h1>What's the best you?</h1>
    </header>
    <form>
      <div>
        {/* "for" and "id" has to match, it's for accessabiliy  */}
        <label for="bestThing">What's the best thing about you?</label>
        <input type="text" id="bestThing" name="bestThing" />
      </div>
    
      
    </form>
    </div>




  );
};
