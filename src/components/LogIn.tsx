import * as React from "react";
import { connect } from "react-redux";
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
import { bindActionCreators } from "redux";
import { loginRequest } from '../actions/actions';
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
    accessToken: string;
    isLoggedIn: boolean;
    loginRequest: (username: string, userpassword: string, baseUrl: string) => any;
}

class LogIn extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userName: "",
            userPassword: "",
            redirect: false,
            loginFailed: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    public handleChange(event: React.FormEvent<HTMLInputElement>) {
        const target = event.currentTarget as HTMLInputElement;
        this.setState({ [target.name]: target.value });
    }

    public handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // fetch(this.props.api + "login", {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         username: this.state.userName,
        //         password: this.state.userPassword
        //     }
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             this.setState({ redirect: true });
        //             return response.json();
        //         } else {
        //             this.setState({ loginFailed: true });
        //             return response.json();
        //         }
        //     })
        //     .then(data => console.log(data));
        this.props.loginRequest(this.state.userName, this.state.userPassword, this.props.api);
        console.log(this.props.accessToken)
        event.preventDefault();
    }

    public render() {
        if (this.props.isLoggedIn) {
            return <Redirect to="/" />
        }

        return (
            <Container>
                <Label className="label-header">Sign in to Project Galaxy</Label>
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

function mapStateToProps(state: any) {
    return {
        api: state.api.api,
        accessToken: state.user.accessToken,
        isLoggedIn: state.user.isLoggedIn
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        loginRequest: bindActionCreators(loginRequest, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogIn);
