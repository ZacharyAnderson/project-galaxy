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

class SignUp extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
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
                  <Form>
                    <FormGroup>
                      <Label for="userName">Username</Label>
                      <Input
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="RickyGervais"
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
                        placeholder="RickyG123@gmail.com"
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
                        placeholder="Type Password Here!"
                      />
                      <FormText color="muted">
                        Make Sure it's atleast 8 characters including a number
                        and lowercase letter.
                      </FormText>
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
