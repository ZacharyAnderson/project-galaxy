import * as React from 'react';
import {Col, Row} from 'reactstrap';
import AbvCalculatorCard from './AbvCalculatorCard';

class ToolCenter extends React.Component<{}> {
    public render() {
        return(
            <div>
                <Row>
                    <Col sm="3">
                        <AbvCalculatorCard />
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default ToolCenter;