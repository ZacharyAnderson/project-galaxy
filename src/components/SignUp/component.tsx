import * as React from "react";
import { Redirect } from "react-router-dom";
import "./component.css";
import { SignUpCard } from "./SignUpCard/component";

interface State {
  userName: string;
  userEmail: string;
  userPassword: string;
  userPassword2: string;
  uniqueUsername: boolean;
  uniqueEmail: boolean;
  redirect: boolean;
  registrationFailed: boolean;
  regFailedStatus: number;
  regFailedMessage: string;
  [key: string]: string | boolean | number;
}

export interface ReduxStateProps {
  api: string;
}

type Props = ReduxStateProps;

export class SignUpComponent extends React.Component<Props, State> {
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
      registrationFailed: false,
      regFailedStatus: 0,
      regFailedMessage: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  public registerUser(username: string, useremail: string): any {
    if (username !== "" && useremail !== "") {
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
            this.setState({
              regFailedMessage: "This username already exists!"
            });
            this.setState({ registrationFailed: true });
          } else if (this.state.uniqueEmail === false) {
            this.setState({
              regFailedMessage: "this email is already in use!"
            });
            this.setState({ registrationFailed: true });
          } else if (this.state.userPassword.search(/[A-Z]/) === -1) {
            this.setState({
              regFailedMessage:
                "Your password does not contain an uppercase character."
            });
            this.setState({ registrationFailed: true });
          } else if (this.state.userPassword.search(/[0-9]/) === -1) {
            this.setState({
              regFailedMessage:
                "Your password does not contain a numerical value."
            });
            this.setState({ registrationFailed: true });
          } else if (this.state.userPassword !== this.state.userPassword2) {
            this.setState({
              regFailedMessage: "Looks like your passwords don't match."
            });
            this.setState({ registrationFailed: true });
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
            }).then(response => {
              if (response.ok) {
                this.setState({ redirect: true });
                return response.json();
              } else {
                this.setState({ registrationFailed: true });
                this.setState({ regFailedStatus: response.status });
                return response.json();
              }
            });
          }
        });
    } else {
      this.setState({ registrationFailed: true });
      this.setState({ regFailedStatus: 404 });
    }
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

  public handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    this.registerUser(this.state.userName, this.state.userEmail);
    event.preventDefault();
  }

  public render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }

    return (
      <SignUpCard
        userName={this.state.userName}
        userEmail={this.state.userEmail}
        userPassword={this.state.userPassword}
        userPassword2={this.state.userPassword2}
        uniqueUsername={this.state.uniqueUsername}
        uniqueEmail={this.state.uniqueEmail}
        registrationFailed={this.state.registrationFailed}
        regFailedMessage={this.state.regFailedMessage}
        regFailedStatus={this.state.regFailedStatus}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        registerUser={this.registerUser}
      />
    );
  }
}
