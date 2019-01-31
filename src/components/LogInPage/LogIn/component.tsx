import * as React from "react";
import { Redirect } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { AlertComponent } from "../../SignUp/AlertComponent";
import "./component.css";

interface State {
  userName: string;
  userPassword: string;
  redirect: boolean;
  [key: string]: string | boolean;
}

export interface ReduxStateProps {
  api: string;
  accessToken: string;
  isLoggedIn: boolean;
  loginFailed: boolean;
  failedMessage: string;
}

export interface ReduxDispatchProps {
  loginRequest: (
    username: string,
    userpassword: string,
    baseUrl: string
  ) => void;
}

type Props = ReduxStateProps & ReduxDispatchProps;
export class LogInComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: "",
      userPassword: "",
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.currentTarget as HTMLInputElement;
    this.setState({ [target.name]: target.value });
  }

  public handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    this.props.loginRequest(
      this.state.userName,
      this.state.userPassword,
      this.props.api
    );
    event.preventDefault();
  }

  public render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <Container>
        <Label className="label-header">Sign in to Project Galaxy</Label>
        {this.props.loginFailed ? (
          <AlertComponent regFailedMessage={this.props.failedMessage} />
        ) : null}
        <Card className="card">
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="username" className="label-top">
                  Username or email address
                </Label>
                <Input
                  type="text"
                  name="userName"
                  id="username"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="label">
                  Password
                </Label>
                <Input
                  type="password"
                  name="userPassword"
                  id="password"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button className="button">Sign In</Button>
            </Form>
          </Container>
        </Card>
      </Container>
    );
  }
}
