import * as React from "react";
import { Col, Row } from "reactstrap";
import { AbvCalculatorCard } from "../AbvCalculatorCard/component";
import { NavBar } from "../NavBar/container";

export class ToolCenter extends React.Component<{}> {
  public render() {
    return (
      <div>
        <NavBar />
        <Row>
          <Col sm="3">
            <AbvCalculatorCard />
          </Col>
        </Row>
      </div>
    );
  }
}
