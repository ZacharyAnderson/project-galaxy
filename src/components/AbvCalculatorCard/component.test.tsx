import { shallow } from "enzyme";
import * as React from "react";
import "../../setupTests";
import { AbvCalculatorCard } from "./component";

describe("<AbvCalculatorCard />", () => {
    it("renders 1 <AbvCalculatorCard /> component", () => {
        const component = shallow(<AbvCalculatorCard />);
        expect(component).toMatchSnapshot();
    })
})