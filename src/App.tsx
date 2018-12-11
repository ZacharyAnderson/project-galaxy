import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import AbvCalculatorCard from "../src/components/AbvCalculatorCard";
import "./App.css";
import logo from "./logo.svg";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
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
