import Card from "./components/Card";
import Container from "./components/Container";

export const App = () => {
  return (
    <Container>
      <Card>
        <h1>Welcome to our mushroom survey!</h1>
        <p>In this survey we would like you to answer a couple of questions regarding mushrooms.</p>
        <img src="/mushroom.jpg"></img>
      </Card>
      <Card>
        <h1></h1>
      </Card>
      <Card>
        <h1></h1>
      </Card>
      <Card>
        <h1></h1>
      </Card>
    </Container>
  );
};
