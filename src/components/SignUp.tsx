import * as React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row
} from "reactstrap";

interface State {
  userName: string;
  userEmail: string;
  userPassword: string;
  userPassword2: string;
  [key: string]: string;
}

class SignUp extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
      userPassword2: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.currentTarget as HTMLInputElement;
    this.setState({ [target.name]: target.value });
  }

  public handleSubmit(event: any) {
    console.log(this.state.userName);
    console.log(this.state.userEmail);
    console.log(this.state.userPassword2);
    console.log(this.state.userPassword);
    if (this.state.userPassword === this.state.userPassword2) {
      console.log('The password matches.')
    }
    event.preventDefault();
  }

  public render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card>
                <CardTitle>Join Project Galaxy</CardTitle>
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
                      />
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
                      />
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
                      />
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
                        />
                        <FormText color="muted">
                          Please repeate your password here.
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
      </div>
    );
  }
}

export default SignUp;
