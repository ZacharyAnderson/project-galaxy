import * as React from "react";
import { Alert } from "reactstrap";

interface AlertComponentProps {
  regFailedStatus: number;
  regFailedMessage: string;
}

type Props = AlertComponentProps;

export class AlertComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    if (this.props.regFailedStatus === 0) {
      return (
        <Alert color="danger">
          Registration has failed. <br /> {this.props.regFailedMessage}
        </Alert>
      );
    } else {
      return (
        <Alert color="danger">
          Registration has failed - Status {this.props.regFailedStatus}
        </Alert>
      );
    }
  }
}
