import * as React from "react";
import {
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Navbar,
  NavbarBrand,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
import "./NavBar.css";

interface State {
  isLoggedIn: boolean;
}

class NavBar extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  public render() {
    let user;

    if (this.state.isLoggedIn) {
      user = (
        <UncontrolledDropdown className="float-right">
          <DropdownToggle nav={true} caret={true}>
            User
          </DropdownToggle>
          <DropdownMenu right={true}>
            <DropdownItem>Settings</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    } else {
      user = (
        <NavLink className="float-right" href="/signup">
          Sign Up
        </NavLink>
      );
    }
    return (
      <div>
        <Navbar color="dark">
          <Col sm="1.5">
            <NavbarBrand fixed="" href="/">
              project-galaxy
            </NavbarBrand>
          </Col>
          <Col sm="3">
            <Input
              type="search"
              name="searchBar"
              id="searchBar"
              placeholder="Oatmeal Stout"
            />
          </Col>
          <Col sm="1.5">
            <NavLink href="/">Recipes</NavLink>
          </Col>
          <Col sm="1.5">
            <NavLink href="/tool-center">Tool-Center</NavLink>
          </Col>
          <Col>{user}</Col>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
