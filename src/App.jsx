// Start by importing the SurveyForm component from the SurveyForm file.
// This lets us use SurveyForm as a component within this App component.
import { SurveyForm } from "./SurveyForm";

// Define the App component as a function that returns some JSX.
// JSX is a syntax extension for JavaScript that looks like HTML and is used in React to describe what the UI should look like.
const App = () => {
  return (
    // Here we return a div with a class name of "container" that contains our application's HTML.
    <div className="container">
      {/* Inside the div, we add a heading with the text "Break the ice survey" */}
      <h1>Break the ice survey</h1>
      {/* Then we include the SurveyForm component we imported earlier.
          This is how you include one component inside another in React. */}
      <SurveyForm />
    </div>
  );
};

// "export default App;" makes the App component available to other files in the application.
// This means we can import App in another file and use it there, like displaying it in the webpage.

// Why "export default"? Here's a simple explanation:
// - "export default" is used to export a single class, function, or primitive from a script file.
// - It's useful because you can import the default export without using curly braces {}.
// - This makes importing the component simpler and cleaner in other parts of your app.
// - For example, to use this App component in another part of your app, you can simply write:
//     import App from './App';
//   Notice how we didn't need curly braces around App. That's the convenience of default export!
export default App;
