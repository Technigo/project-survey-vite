//Overview of components structure:
//App.jsx (parent)
//Header.jsx, Survey.jsx, Footer.jsx (children of App.jsx)
//Name.jsx, Activity.jsx, When.jsx (children of Survey.jsx)

import {Survey} from "./components/Survey/Survey"
import {Header} from "./components/Header/Header"
import {Footer} from "./components/Footer/Footer"

export const App = () => {
  return (
  
  <div className="body-container">
    <Header />
    <Survey />
    <Footer />
  </div>
  )
}
