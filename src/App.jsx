import { Questions } from "./assets/components/Questions";
import { Header } from "./assets/components/Header";
import { Footer } from "./assets/components/Footer";
import "./index.css";

export const App = () => {
  return (
    <div>
      <Header />
      <Questions />
      <Footer />
    </div>
  );
};
