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
  uniqueUsername: boolean;
  uniqueEmail: boolean;
  [key: string]: string | boolean;
}

class SignUp extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
      userPassword2: '',
      uniqueUsername: false,
      uniqueEmail: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  public registerUser(username: string, useremail: string): any {
    Promise.all([
      fetch("http://127.0.0.1:5000/api/v1.0/registration/username/" + username),
      fetch("http://127.0.0.1:5000/api/v1.0/registration/email/" + useremail)
    ])
      .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
      .then(([data1, data2]) => {
        this.setState({ uniqueEmail: data1.isUnique });
        this.setState({ uniqueUsername: data2.isUnique });
        if (this.state.uniqueUsername === true && this.state.uniqueEmail === true) {
          console.log("Looks like its time to register..");
        } else if (this.state.uniqueEmail === false) {
          console.log("this email is already in use!");
        } else if (this.state.uniqueUsername === false) {
          console.log("This username already exists!");
        }
      })

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
    console.log(this.state.uniqueUsername);
    console.log(this.state.uniqueEmail);
    this.registerUser(this.state.userName, this.state.userEmail)
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
