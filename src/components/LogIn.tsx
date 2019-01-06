import * as React from 'react';
import { Button, Card, Container, Form, FormGroup, Input, Label } from "reactstrap";
import "./LogIn.css";

interface State {
    userName: string;
    userPassword: string;
    [key: string]: string;
}

class LogIn extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            userName: "",
            userPassword: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(event: React.FormEvent<HTMLInputElement>) {
        const target = event.currentTarget as HTMLInputElement;
        this.setState({ [target.name]: target.value })
    }

    public handleSubmit(event: any) {
        console.log(this.state.userName);
        console.log(this.state.userPassword);
        event.preventDefault();
    }

    public render() {
        return (
            <Container>
                <Label className="label-header">Sign in to Project Galaxy</Label>
                <Card className="card">
                    <Container>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label for="username" className="label-top" >Username or email address</Label>
                                <Input type="text" name="userName" id="username" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password" className="label" >Password</Label>
                                <Input type="password" name="userPassword" id="password" onChange={this.handleChange} />
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