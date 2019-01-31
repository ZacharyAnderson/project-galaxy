import * as React from "react";
import { Alert } from "reactstrap";

interface AlertComponentProps {
  regFailedStatus?: number;
  regFailedMessage: string;
}

type Props = AlertComponentProps;

export class AlertComponent extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return <Alert color="danger">{this.props.regFailedMessage}</Alert>;
  }
}
