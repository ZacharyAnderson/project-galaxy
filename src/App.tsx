import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import AbvCalculatorCard from "../src/components/AbvCalculatorCard";
import NavBar from "../src/components/NavBar";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <NavBar />
        <Container>
          <Row>
            <Col xs="3">
              <AbvCalculatorCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
