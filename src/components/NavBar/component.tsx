import * as React from "react";
import { Link } from 'react-router-dom';
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
import "./component.css";

interface State {
  isLoggedIn: boolean;
}

export interface ReduxStateProps {
  isLoggedIn: boolean;
}

type Props = ReduxStateProps;

export class NavBarComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  public render() {
    let user;
    if (this.props.isLoggedIn) {
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
        <NavLink className="float-right" tag={Link} to="/signup">
          Sign Up
        </NavLink>
      );
    }
    return (
      <div>
        <Navbar color="dark">
          <Col sm="1.5">
            <NavbarBrand fixed="" tag={Link} to="/">
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
            <NavLink tag={Link} to="/">Recipes</NavLink>
          </Col>
          <Col sm="1.5">
            <NavLink tag={Link} to="/tool-center">Tool-Center</NavLink>
          </Col>
          <Col>
            <NavLink className="float-right" tag={Link} to="/login">Login</NavLink>
          </Col>
          <Col sm="1.5" >{user}</Col>
        </Navbar>
      </div>
    );
  }
}

