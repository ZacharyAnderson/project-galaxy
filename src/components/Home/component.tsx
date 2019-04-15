import * as React from "react";
import { AbvCalculatorCard } from "../AbvCalculatorCard/component";
import { NavBar } from "../NavBar/container";

export class Home extends React.Component<{}> {
  public render() {
    return (
      <div>
        <NavBar />
        <AbvCalculatorCard />
      </div>
    );
  }
}
