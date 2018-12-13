import * as React from "react";
import { Col,Input, Navbar, NavbarBrand, Row } from "reactstrap";

class NavBar extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div>
        <Navbar color="dark">
          <Row>
            <Col>
            <NavbarBrand href="/">project-galaxy</NavbarBrand>
            </Col>
            <Col>
            <Input
              type="search"
              name="searchbar"
              id="searchbar"
              placeholder="Oatmeal Stout"
            />
            </Col>
          </Row>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
