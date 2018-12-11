import * as React from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

interface State {
  startingGravity: number;
  finalGravity: number;
}

class AbvCalculatorCard extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      finalGravity: 1.01,
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
    alert(
      "You're ABV is: " +
        ((this.state.startingGravity - this.state.finalGravity) * 131.25)
    );
    event.preventDefault();
  }
  public render() {
    return (
      <div>
        <Card body={true}>
          <CardTitle>ABV Calculator</CardTitle>
          <CardText>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row={true}>
                <InputGroup>
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
                <InputGroup>
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
                  <Input />
                </InputGroup>
              </FormGroup>
            </Form>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default AbvCalculatorCard;
