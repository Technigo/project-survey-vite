import { useState } from 'react';
import { Form } from "./component/Form";
import { Footer } from "./component/Footer";

export const App = () => {
  const [lastP, setLastP] = useState(false)
  const [lastHeader, setLastHeader] = useState("HERE'S YOUR DRINK")

  return (
    <>
      <div className="app-container">
        <div className="form-background">
          <h1 className={"the-header " + (lastP ? "hidden" : "")}>FIND YOUR DRINK</h1>
          <h1 className={"the-header "+ (lastP ? "" : "hidden")}>{lastHeader}</h1>
          <Form headerVisibleControl={setLastP} headerContent={setLastHeader} summaryPage={lastP} />
        </div>
      </div>
      <Footer />
    </>
  );
};
