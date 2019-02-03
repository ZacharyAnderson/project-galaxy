import classnames from "classnames";
import * as React from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Form,
  FormGroup,
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
  [key: string]: string | object | undefined;
}

type Props = ReduxStateProps;

export class SettingsComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: "1",
      oldPassword: "",
      newPassword1: "",
      newPassword2: ""
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
    console.log(this.state.oldPassword);
    console.log(this.state.newPassword1);
    event.preventDefault();
  };

  public render() {
    if (!this.props.isLoggedIn) {
      return <Redirect to="/" />;
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
