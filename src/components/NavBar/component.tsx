import * as React from "react";
import { Link, Redirect } from "react-router-dom";
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

export interface ReduxStateProps {
  isLoggedIn: boolean;
}

export interface ReduxDispatchProps {
  removeLoginToken: () => void;
}

export interface State {
  isGoToSettings: boolean;
}

type Props = ReduxStateProps & ReduxDispatchProps;

export class NavBarComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isGoToSettings: false
    };
    this.dropdownOnClick = this.dropdownOnClick.bind(this);
    this.goToSettings = this.goToSettings.bind(this);
  }

  public dropdownOnClick(event: React.MouseEvent<HTMLElement>) {
    this.props.removeLoginToken();
    event.preventDefault();
  }

  public goToSettings(event: React.MouseEvent<HTMLElement>) {
    this.setState({ isGoToSettings: true });
  }

  public render() {
    let user;

    if (this.state.isGoToSettings) {
      return <Redirect to="/settings" />;
    }

    if (this.props.isLoggedIn) {
      user = (
        <UncontrolledDropdown className="float-right">
          <DropdownToggle nav={true} caret={true}>
            User
          </DropdownToggle>
          <DropdownMenu right={true}>
            <DropdownItem onClick={this.goToSettings}>Settings</DropdownItem>
            <DropdownItem divider={true} />
            <DropdownItem onClick={this.dropdownOnClick}>Log Out</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );
    } else {
      user = (
        <div>
          <Col>
            <NavLink className="float-right" tag={Link} to="/login">
              Login
            </NavLink>
          </Col>
          <Col>
            <NavLink className="float-right" tag={Link} to="/signup">
              Sign Up
            </NavLink>
          </Col>
        </div>
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
            <NavLink tag={Link} to="/">
              Recipes
            </NavLink>
          </Col>
          <Col sm="1.5">
            <NavLink tag={Link} to="/tool-center">
              Tool-Center
            </NavLink>
          </Col>
          <Col>
            <Col className="float-right">{user}</Col>
          </Col>
        </Navbar>
      </div>
    );
  }
}
