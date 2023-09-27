import { Form } from "./component/Form";

export const App = () => {
  return (
    <>
      <div className="app-container">
        <div className="form-background">
          <h1 className="the-header">FIND YOUR DRINK</h1>
          <Form />
        </div>
      </div>
    </>
  );
};
