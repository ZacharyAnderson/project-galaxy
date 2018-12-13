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

class NavBar extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
  }

  public render() {
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
              name="searchbar"
              id="searchbar"
              placeholder="Oatmeal Stout"
            />
          </Col>
          <Col sm="1.5">
            <NavLink href="/">Recipes</NavLink>
          </Col>
          <Col sm="1.5">
            <NavLink href="/">Tool-Center</NavLink>
          </Col>
          <Col>
            <UncontrolledDropdown className="float-right">
                <DropdownToggle nav={true} caret={true}>
                    User
                </DropdownToggle>
                <DropdownMenu right={true}>
                    <DropdownItem>
                        Settings
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            </Col>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
