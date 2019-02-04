import classnames from "classnames";
import * as React from "react";
import { Redirect } from "react-router-dom";
import {
  Alert,
  Button,
  Card,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Jumbotron,
  Label,
  Media,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import { NavBar } from "../NavBar/container";
import "./component.css";

export interface ReduxStateProps {
  api: string;
  accessToken: string;
  current_user: string;
  email: string;
  avatar: string;
  isLoggedIn: boolean;
}

interface State {
  userObject?: object;
  activeTab: string;
  oldPassword: string;
  newPassword1: string;
  newPassword2: string;
  resetAction: boolean;
  resetFailed: boolean;
  resetMsg: string;
  [key: string]: string | object | undefined | boolean;
}

type Props = ReduxStateProps;

export class SettingsComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: "1",
      oldPassword: "",
      newPassword1: "",
      newPassword2: "",
      resetAction: false,
      resetFailed: false,
      resetMsg: ""
    };
  }

  public toggle = (tab: string) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  public handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget as HTMLInputElement;
    this.setState({ [target.name]: target.value });
  };

  public handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (this.state.newPassword1 !== this.state.newPassword2) {
      this.setState({
        resetFailed: true,
        resetMsg: "New Password's do not match."
      });
    } else if (this.state.newPassword1.search(/[A-Z]/) === -1) {
      this.setState({
        resetFailed: true,
        resetMsg: "Password does not contain an uppercase character."
      });
    } else if (this.state.newPassword1.search(/[0-9]/) === -1) {
      this.setState({
        resetFailed: true,
        resetMsg: "Password does not contain a number."
      });
    } else if (this.state.newPassword1.length < 8) {
      this.setState({
        resetFailed: true,
        resetMsg: "Password is not at least 8 characters."
      });
    } else {
      fetch(this.props.api + "user/resetpassword", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.props.accessToken
        },
        body: JSON.stringify({
          username: this.props.current_user,
          oldPassword: this.state.oldPassword,
          newPassword: this.state.newPassword1
        })
      }).then(response => {
        if (response.ok) {
          this.setState({
            resetMsg: "Password was reset successfully.",
            resetAction: true
          });
        } else {
          this.setState({
            resetMsg: "Password Reset Failed, your old password may be wrong.",
            resetFailed: true
          });
        }
      });
    }
    event.preventDefault();
  };

  public render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }

    let alertMessage;

    if (this.state.resetFailed) {
      alertMessage = <Alert color="danger">{this.state.resetMsg}</Alert>;
    } else if (this.state.resetAction) {
      alertMessage = <Alert color="success">{this.state.resetMsg}</Alert>;
    }

    return (
      <div>
        <NavBar />
        <Nav tabs={true}>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Account
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Jumbotron>
              <Container>
                <Media>
                  <Media left={true} href="#">
                    <img src={this.props.avatar} />
                  </Media>
                  <Media body={true}>
                    <Media heading={true}>User Settings</Media>
                    User: {this.props.current_user} <br />
                    Email: {this.props.email} <br />
                  </Media>
                </Media>
              </Container>
              <Card>
                <Form onSubmit={this.handleSubmit}>
                  <Label className="label-header">Reset Password</Label>
                  {alertMessage}
                  <FormGroup>
                    <Label for="oldPassword">Old Password</Label>
                    <Input
                      type="password"
                      name="oldPassword"
                      id="oldPassword"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="newPassword1">New Password</Label>
                    <Input
                      type="password"
                      name="newPassword1"
                      id="newPassword1"
                      onChange={this.handleChange}
                    />
                    <FormText color="muted">
                      Password needs to be atleast 8 characters, include one
                      capital letter, and a number.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="newPassword2">Confirm New Password</Label>
                    <Input
                      type="password"
                      name="newPassword2"
                      id="newPassword2"
                      onChange={this.handleChange}
                    />
                  </FormGroup>
                  <Button>Reset Password</Button>
                </Form>
              </Card>
            </Jumbotron>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
