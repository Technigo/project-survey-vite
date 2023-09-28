import { Header } from "./components/Header/Header.jsx";
import { Form } from "./components/Form/Form.jsx"
import { Footer } from "./components/Footer/Footer.jsx";

// Define the App component
export const App = () => {
  return (
      // Wrap the entire application content in a content wrapper
      <div className="content-wrapper">
          <div className="app-container">
              <Header />
              <Form />
              <Footer />
          </div>
      </div>
  );
}