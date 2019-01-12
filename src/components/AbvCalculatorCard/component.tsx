import * as React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import "./component.css";

interface State {
  startingGravity: number;
  finalGravity: number;
  abv: string;
  isSubmitted: boolean;
}

export class AbvCalculatorCard extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      abv: "",
      finalGravity: 1.01,
      isSubmitted: false,
      startingGravity: 1.048
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.currentTarget as HTMLInputElement;
    this.setState({ [target.name]: parseFloat(target.value) } as any);
  }

  public handleSubmit(event: any) {
    const currentAbv = (
      (this.state.startingGravity - this.state.finalGravity) *
      131.25
    ).toFixed(2);
    this.setState({ abv: currentAbv });
    this.setState({ isSubmitted: true })
    event.preventDefault();
  }

  public render() {
    return (
      <div>
        <Card body={true}>
          <CardTitle>ABV Calculator</CardTitle>
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row={true}>
                <InputGroup className="input-group input-space" >
                  <InputGroupAddon addonType="prepend">OG</InputGroupAddon>
                  <Input
                    type="number"
                    name="startingGravity"
                    id="startingGravity"
                    placeholder="1.048"
                    value={this.state.startingGravity}
                    onChange={this.handleChange}
                  />
                </InputGroup>
                <InputGroup className="input-group input-space">
                  <InputGroupAddon addonType="prepend">FG</InputGroupAddon>
                  <Input
                    type="number"
                    name="finalGravity"
                    id="finalGravity"
                    placeholder="1.010"
                    value={this.state.finalGravity}
                    onChange={this.handleChange}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <Button type="Submit">Calculate</Button>
                  </InputGroupAddon>
                  <Input value={this.state.isSubmitted ? this.state.abv.concat("%") : ""} />
                </InputGroup>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

