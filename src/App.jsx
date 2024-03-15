// eslint-disable-next-line no-unused-vars
import React, { Suspense, lazy } from "react"

const Form = lazy(() => import("./Components/Form/Form"))
const Header = lazy(() => import("./Components/Header/Header"))
const Footer = lazy(() => import("./Components/Footer/Footer"))

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Form />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
