
import {Survey} from "./components/Survey/Survey"
import {Header} from "./components/Header/Header"
import {Footer} from "./components/Footer/Footer"

export const App = () => {
  return (
  
  <div className="body-container">
    <p>{name}</p>
    <Header />
    <Survey />
    <Footer />
  </div>
  )
};
