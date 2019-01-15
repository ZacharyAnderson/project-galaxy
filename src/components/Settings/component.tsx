import * as React from "react";

export interface ReduxStateProps {
  api: string;
  accessToken: string;
}

interface State {
  userObject: object;
}

type Props = ReduxStateProps;

export class SettingsComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {
    console.log(this.props.accessToken);
    fetch(this.props.api + "user", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + this.props.accessToken
      }
    })
      .then(response => response.json)
      .then(data => console.log(data));
  }

  public render() {
    return (
      <div>
        <h1>TEMPLATE FOR NOW</h1>
        <h3>USER:</h3>
        <h3>EMAIL:</h3>
      </div>
    );
  }
}
