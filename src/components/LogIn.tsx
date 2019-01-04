import * as React from 'react';
import { Button, Card, Container, Form, FormGroup, Input, Label } from "reactstrap";

class LogIn extends React.Component<{}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <Container>
                <Card>
                    <Form>
                        <FormGroup>
                            <Label for="username" style={{ fontWeight: 'bold' }}>Username or email address</Label>
                            <Input type="text" name="username" id="username" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password" style={{ fontWeight: 'bold' }}>Password</Label>
                            <Input type="password" name="password" id="password" />
                        </FormGroup>
                        <Button style={{ width: '100%' }}>Sign In</Button>
                    </Form>
                </Card>
            </Container>

        );
    }
}

export default LogIn;