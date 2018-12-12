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

interface State {
  startingGravity: number;
  finalGravity: number;
  abv: string;
}

class AbvCalculatorCard extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      abv: "",
      finalGravity: 1.01,
      startingGravity: 1.048,
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
                  <Input 
                    value={this.state.abv}
                  />
                </InputGroup>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AbvCalculatorCard;
