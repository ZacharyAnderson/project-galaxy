import { shallow } from "enzyme";
import * as React from "react";
import "../setupTests";
import App from "./App";

describe("<App />", () => {
  it("renders 1 <App /> component", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
