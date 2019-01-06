import * as React from 'react';
import { Button, Card, Container, Form, FormGroup, Input, Label } from "reactstrap";
import "./LogIn.css";

class LogIn extends React.Component<{}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <Container>
                <Label className="label-header">Sign in to Project Galaxy</Label>
                <Card className="card">
                    <Container>
                        <Form>
                            <FormGroup>
                                <Label for="username" className="label-top" >Username or email address</Label>
                                <Input type="text" name="username" id="username" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password" className="label" >Password</Label>
                                <Input type="password" name="password" id="password" />
                            </FormGroup>
                            <Button className="button">Sign In</Button>
                        </Form>
                    </Container>
                </Card>
            </Container>

        );
    }
}

export default LogIn;