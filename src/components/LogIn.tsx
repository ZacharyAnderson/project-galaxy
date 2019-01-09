import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Card, Container, Form, FormGroup, Input, Label } from "reactstrap";
import "./LogIn.css";

interface State {
    userName: string;
    userPassword: string;
    redirect: boolean;
    loginFailed: boolean;
    [key: string]: string | boolean;
}

interface Props {
    api: string;
}

class LogIn extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userName: "",
            userPassword: "",
            redirect: false,
            loginFailed: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(event: React.FormEvent<HTMLInputElement>) {
        const target = event.currentTarget as HTMLInputElement;
        this.setState({ [target.name]: target.value })
    }

    public handleSubmit(event: any) {
        fetch(this.props.api + "login", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "username": this.state.userName,
                "password": this.state.userPassword
            }
        })
            .then(response => {
                if (response.ok) {
                    this.setState({ redirect: true });
                    return response.json();
                } else {
                    this.setState({ loginFailed: true });
                    return response.json();
                }
            })
            .then(data => console.log(data))
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

function mapStatetoProps(state: any) {
    return {
        api: state.tempReducer.api
    }
}

export default connect(mapStatetoProps)(LogIn);