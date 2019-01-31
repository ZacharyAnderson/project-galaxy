import * as React from "react";
import {
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
import { NavBar } from "../../NavBar/container";
import { AlertComponent } from "../AlertComponent/component";

interface SignUpComponentProps {
  userName: string;
  userEmail: string;
  userPassword: string;
  userPassword2: string;
  uniqueUsername: boolean;
  uniqueEmail: boolean;
  registrationFailed: boolean;
  regFailedMessage: string;
  handleChange(event: React.FormEvent<HTMLInputElement>): void;
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
  registerUser(username: string, useremail: string): any;
}

type Props = SignUpComponentProps;

export class SignUpCard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div>
        <NavBar />
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <Card>
                  <CardTitle tag="h2">Join Project Galaxy</CardTitle>
                  {this.props.registrationFailed ? (
                    <AlertComponent
                      regFailedMessage={this.props.regFailedMessage}
                    />
                  ) : null}
                  <CardBody>
                    <Form onSubmit={this.props.handleSubmit}>
                      <FormGroup>
                        <Label for="userName">Username</Label>
                        <Input
                          type="text"
                          name="userName"
                          id="userName"
                          placeholder="Username"
                          onChange={this.props.handleChange}
                          valid={this.props.uniqueUsername}
                          invalid={
                            !this.props.uniqueUsername &&
                            this.props.userName !== ""
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
                          onChange={this.props.handleChange}
                          valid={this.props.uniqueEmail}
                          invalid={
                            !this.props.uniqueEmail &&
                            this.props.userEmail !== ""
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
                          onChange={this.props.handleChange}
                          invalid={
                            !(
                              this.props.userPassword ===
                              this.props.userPassword2
                            ) &&
                            this.props.userPassword !== "" &&
                            this.props.userPassword2 !== "" &&
                            this.props.userPassword.length < 8
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
                            onChange={this.props.handleChange}
                            invalid={
                              !(
                                this.props.userPassword ===
                                this.props.userPassword2
                              ) &&
                              this.props.userPassword !== "" &&
                              this.props.userPassword2 !== "" &&
                              this.props.userPassword2.length < 8
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
