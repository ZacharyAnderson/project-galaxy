import * as React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Jumbotron,
  Label,
  Row
} from "reactstrap";
import "./SignUp.css";

interface State {
  userName: string;
  userEmail: string;
  userPassword: string;
  userPassword2: string;
  uniqueUsername: boolean;
  uniqueEmail: boolean;
  redirect: boolean;
  registrationFailed: boolean;
  [key: string]: string | boolean;
}

interface Props {
  api: string;
}

class SignUp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: "",
      userEmail: "",
      userPassword: "",
      userPassword2: "",
      uniqueUsername: false,
      uniqueEmail: false,
      redirect: false,
      registrationFailed: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  public registerUser(username: string, useremail: string): any {
    Promise.all([
      fetch(this.props.api + "registration/username/" + username),
      fetch(this.props.api + "registration/email/" + useremail)
    ])
      .then(([response1, response2]) =>
        Promise.all([response1.json(), response2.json()])
      )
      .then(([data1, data2]) => {
        this.setState({ uniqueEmail: data1.isUnique });
        this.setState({ uniqueUsername: data2.isUnique });
        if (this.state.uniqueUsername === false) {
          console.log("This username already exists!");
        } else if (this.state.uniqueEmail === false) {
          console.log("this email is already in use!");
        } else if (this.state.userPassword !== this.state.userPassword2) {
          console.log("Looks like your passwords don't match.");
        } else {
          console.log("Registering " + this.state.userName);
          fetch(this.props.api + "registration", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username: this.state.userName,
              useremail: this.state.userEmail,
              userpassword: this.state.userPassword
            })
          })
            .then(response => {
              if (response.ok) {
                this.setState({ redirect: true })
                return response.json();
              } else {
                this.setState({ registrationFailed: true });
                return response.json();
              }
            })
            .catch(() => {
              console.log("failed");
            })
            .then(data => {
              console.log(data);
            })
        }
      });
  }

  public handleChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.currentTarget as HTMLInputElement;
    this.setState({ [target.name]: target.value });

    if (target.name === "userName" && target.value !== "") {
      fetch(this.props.api + "registration/username/" + target.value)
        .then(response => response.json())
        .then(data => {
          this.setState({ uniqueUsername: data.isUnique });
        });
    } else if (target.name === "userEmail" && target.value !== "") {
      fetch(this.props.api + "registration/email/" + target.value)
        .then(response => response.json())
        .then(data => {
          this.setState({ uniqueEmail: data.isUnique });
        });
    } else if (target.name === "userName" && target.value === "") {
      this.setState({ uniqueUsername: false });
    } else if (target.name === "userEmail" && target.value === "") {
      this.setState({ uniqueEmail: false });
    }
  }

  public handleSubmit(event: any) {
    this.registerUser(this.state.userName, this.state.userEmail);
    event.preventDefault();
  }

  public render() {
    let registrationAlert;

    if (this.state.redirect) {
      return <Redirect to='/login' />
    }

    if (this.state.registrationFailed) {
      registrationAlert = <Alert color="danger">Registration has failed.</Alert>;
    }

    return (
      <div>
        <Jumbotron>
          {registrationAlert}
          <Container>
            <Row>
              <Col>
                <Card>
                  <CardTitle tag="h2">Join Project Galaxy</CardTitle>
                  <CardBody>
                    <Form onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <Label for="userName">Username</Label>
                        <Input
                          type="text"
                          name="userName"
                          id="userName"
                          placeholder="Username"
                          onChange={this.handleChange}
                          valid={this.state.uniqueUsername}
                          invalid={
                            !this.state.uniqueUsername &&
                            this.state.userName !== ""
                          }
                        />
                        <FormFeedback valid={true}>
                          The Username is available!
                        </FormFeedback>
                        <FormFeedback>
                          The Username is already taken.
                        </FormFeedback>
                        <FormText color="muted">
                          This will be your username.
                        </FormText>
                      </FormGroup>
                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                          type="email"
                          name="userEmail"
                          id="userEmail"
                          placeholder="Suzie@test.com"
                          onChange={this.handleChange}
                          valid={this.state.uniqueEmail}
                          invalid={
                            !this.state.uniqueEmail &&
                            this.state.userEmail !== ""
                          }
                        />
                        <FormFeedback valid={true}>
                          This email has not been registered already.
                        </FormFeedback>
                        <FormFeedback>
                          This email has already been registered.
                        </FormFeedback>
                        <FormText color="muted">
                          We'll never share your email address with anyone.
                        </FormText>
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                          type="password"
                          name="userPassword"
                          id="userPassword"
                          placeholder="Type Password Here"
                          onChange={this.handleChange}
                          invalid={
                            !(
                              this.state.userPassword ===
                              this.state.userPassword2
                            ) &&
                            this.state.userPassword !== "" &&
                            this.state.userPassword2 !== ""
                          }
                        />
                        <FormFeedback>The passwords aren't valid!</FormFeedback>
                        <FormText color="muted">
                          Make Sure it's atleast 8 characters including a number
                          and lowercase letter.
                        </FormText>
                        <FormGroup>
                          <Label for="password2">Repeat Password</Label>
                          <Input
                            type="password"
                            name="userPassword2"
                            id="userPassword2"
                            placeholder="Repeat Password Here"
                            onChange={this.handleChange}
                            invalid={
                              !(
                                this.state.userPassword ===
                                this.state.userPassword2
                              ) &&
                              this.state.userPassword !== "" &&
                              this.state.userPassword2 !== ""
                            }
                          />
                          <FormFeedback>
                            The passwords aren't valid!
                          </FormFeedback>
                          <FormText color="muted">
                            Please repeat your password here.
                          </FormText>
                        </FormGroup>
                      </FormGroup>
                      <Button>Register</Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

function mapStatetoProps(state: any) {
  return {
    api: state.tempReducer.api
  };
}

export default connect(mapStatetoProps)(SignUp);
